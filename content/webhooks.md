---
title: Webhooks
description: Receive signed HTTPS callbacks when things happen in your team — versions, builds, domains, transfers, and more — with verifiable signatures and replayable deliveries.
---

Webhooks push events to your own HTTPS endpoint as they happen, so you can trigger CI, post to Slack, update a dashboard, or kick off downstream automation without polling the API.

A webhook is **team-scoped**: one endpoint receives events from every space the team owns. Manage them in **Team settings → Webhooks**, or with the API.

## Create a webhook

```bash
curl -X POST https://api.spacefast.com/v1/webhooks \
  -H "Authorization: Bearer $SPACEFAST_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "teamId": "team_123",
    "url": "https://example.com/hooks/spacefast",
    "events": ["version.ready", "build.failed"]
  }'
```

The endpoint URL must be **public HTTPS** — `http://` and private/internal hosts are rejected. The response includes the **signing secret** (`whsec_…`) **exactly once**; store it now, because it's never shown again. Leave `events` unset (or `["*"]`) to receive everything.

## Events

Subscribe to exact codes (`version.ready`), a resource wildcard (`version.*`), or the catch-all `*`. The full catalog:

| Resource            | Events                                                                                                                                                                                                                                                          |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `space`             | `created`, `claimed`, `transferred`, `moved`, `expired`, `disabled`, `enabled`, `deleted`, `config_updated`, `password_updated`                                                                                                                                 |
| `version`           | `created`, `ready`, `warning`, `failed`, `expired`, `canceled`, `deleted`, `retention_warning`, `retention_deleted`                                                                                                                                             |
| `channel`           | `promoted`                                                                                                                                                                                                                                                      |
| `build`             | `created`, `succeeded`, `failed`, `canceled`, `skipped`                                                                                                                                                                                                         |
| `domain`            | `created`, `verified`, `verification_failed`, `control_lost`, `dns_updated`, `nameservers_updated`, `registration_purchased`, `registration_renewed`, `registration_expiring`, `registration_expired`, `transfer_in_started`, `transfer_out_started`, `deleted` |
| `binding`           | `created`, `activated`, `blocked`, `deleted`                                                                                                                                                                                                                    |
| `transfer`          | `requested`, `confirmed`, `completed`, `canceled`, `expired`, `failed`                                                                                                                                                                                          |
| `variable`          | `updated`, `deleted`                                                                                                                                                                                                                                            |
| `api_key`           | `created`, `updated`, `revoked`                                                                                                                                                                                                                                 |
| `webhook`           | `created`, `updated`, `secret_rotated`, `disabled`, `deleted`                                                                                                                                                                                                   |
| `team`              | `updated`, `member_added`, `member_removed`, `member_role_updated`, `builds_deploys_quota_exceeded`                                                                                                                                                             |
| `tenant`            | `past_due`, `suspended`, `reactivated`, `deleted`                                                                                                                                                                                                               |
| `export` / `import` | `ready`, `failed`                                                                                                                                                                                                                                               |
| `comment`           | `token_minted`, `created`, `reply_created`, `archived`, `unarchived`                                                                                                                                                                                            |
| `abuse_report`      | `created`, `updated`                                                                                                                                                                                                                                            |
| `user`              | `created`, `signed_in`, `deleted`, `two_factor_enabled`, `two_factor_disabled`, `impersonation_started`, `impersonation_stopped`                                                                                                                                |

## Payload

Every delivery is a JSON body of the form:

```json
{
  "version": "2026-06-10",
  "event": {
    "id": "evt_…",
    "sequence": 4821,
    "tenantId": "tnt_…",
    "spaceId": "spc_…",
    "actor": { "type": "user", "id": "usr_…" },
    "code": "version.ready",
    "message": "Version is live",
    "details": {},
    "createdAt": "2026-06-30T12:00:00.000Z"
  }
}
```

`version` is the payload schema date, not your space version. The event `code` is one of the events above. Deliveries are **at-least-once** — dedupe on `event.id`.

Each request also carries:

- `Spacefast-Event-Id` — the event id (same as `event.id`).
- `Spacefast-Delivery-Id` — this delivery attempt's id.
- `Spacefast-Signature` — the signature, described below.

## Verify the signature

The `Spacefast-Signature` header looks like:

```text
Spacefast-Signature: t=1730289600, v1=5257a8…
```

`t` is the unix timestamp; each `v1=` is an **HMAC-SHA256** (hex) of the string `` `${t}.${rawBody}` `` keyed by your signing secret. Recompute it over the **raw request body** and compare in constant time:

```js
import { createHmac, timingSafeEqual } from "node:crypto";

function verify(rawBody, header, secret) {
  const parts = Object.fromEntries(header.split(",").map((p) => p.trim().split("=")));
  const expected = createHmac("sha256", secret).update(`${parts.t}.${rawBody}`).digest("hex");
  // A header can carry more than one v1= during secret rotation — accept any match.
  const signatures = header.match(/v1=([0-9a-f]+)/g)?.map((s) => s.slice(3)) ?? [];
  const ok = signatures.some(
    (sig) =>
      sig.length === expected.length && timingSafeEqual(Buffer.from(sig), Buffer.from(expected)),
  );
  // Also reject stale timestamps to prevent replay.
  return ok && Math.abs(Date.now() / 1000 - Number(parts.t)) < 300;
}
```

During a secret rotation the header carries **two** `v1=` entries — one signed with the new secret and one with the old — so either secret verifies. Accept a delivery if any entry matches.

## Rotate the secret

```bash
curl -X POST https://api.spacefast.com/v1/webhooks/whk_123/rotate-secret \
  -H "Authorization: Bearer $SPACEFAST_TOKEN" \
  -d '{ "expireNow": false }'
```

A new secret is returned (again, only once). By default the previous secret stays valid for **24 hours** so you can roll it out without dropping deliveries; pass `expireNow: true` to cut over immediately.

## Deliveries and retries

- `GET /v1/webhooks/:id/deliveries` lists attempts, newest first; `GET /v1/webhook-deliveries/:deliveryId` shows one.
- `POST /v1/webhook-deliveries/:deliveryId/redeliver` replays an event. The dashboard delivery log has a **Resend** button for the same thing.
- Each attempt has a **10-second timeout**, follows no redirects, and reads at most 64 KiB of your response. Return a `2xx` to acknowledge.
- Failed attempts retry with exponential backoff; a delivery that never succeeds ends as `exhausted`.
- An endpoint that keeps failing is auto-protected: it's marked **failing** after 8 consecutive failures and **disabled** after 32. Any success resets the counter. Re-enable a disabled webhook by setting its status back to `active`.

Deleting a webhook removes it from customer-facing API and dashboard lists and stops deliveries. The record and delivery history are retained for internal audit.
