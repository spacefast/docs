---
title: Webhooks
description: Receive signed HTTPS callbacks for team events, with verifiable signatures and retries.
---

Webhooks push events to your own HTTPS endpoint as they happen. You can trigger
CI, post to Slack, update a dashboard, or kick off downstream automation
without polling the API.

A webhook is **team-scoped**. One endpoint receives events from every space the
team owns. Manage them in **Team settings → Webhooks**, or with the API.

## Create a webhook

One API call creates the endpoint and returns its secret:

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

The endpoint URL must be **public HTTPS**. Spacefast rejects `http://` and
private or internal hosts. The response includes the **signing secret**
(`whsec_123`) **exactly once**. Store it now. Spacefast never shows it again.
Leave `events` unset (or `["*"]`) to receive everything.

## Events

Subscribe to exact codes (`version.ready`), a resource wildcard (`version.*`),
or the catch-all `*`. Unknown codes are rejected with
[`invalid_webhook_events`](/errors/invalid_webhook_events), so copy them
exactly. The full catalog:

| Resource        | Events |
| --------------- | ------ |
| `space`         | `created`, `claimed`, `transferred`, `expired`, `disabled`, `enabled`, `deleted`, `config_updated`, `slug_updated`, `access_logout_all`, `access_transfer_scrub`, `share_link_created`, `share_link_revoked`, `access_request_created`, `access_request_resolved`, `grant_created`, `grant_updated`, `grant_revoked` |
| `site`          | `provision_requested`, `placement_hold_set`, `placement_hold_cleared`, `burst_toggled` |
| `version`       | `created`, `ready`, `warning`, `failed`, `expired`, `canceled`, `deleted` |
| `channel`       | `promoted` |
| `build`         | `created`, `succeeded`, `failed`, `canceled`, `skipped` |
| `domain`        | `created`, `verified`, `verification_failed`, `control_lost`, `dns_updated`, `nameservers_updated`, `registration_purchased`, `registration_renewed`, `registration_expiring`, `registration_expired`, `transfer_in_started`, `transfer_out_started`, `deleted`, `attached`, `activated`, `blocked`, `detached` |
| `transfer`      | `requested`, `confirmed`, `completed`, `canceled`, `expired`, `failed` |
| `variable`      | `updated`, `deleted` |
| `api_key`       | `created`, `updated`, `revoked` |
| `agent_handoff` | `created`, `redeemed`, `revoked` |
| `webhook`       | `created`, `updated`, `secret_rotated`, `disabled`, `deleted` |
| `team`          | `updated`, `slug_updated`, `access_defaults_updated`, `member_added`, `member_removed`, `member_role_updated`, `builds_deploys_quota_exceeded` |
| `tenant`        | `past_due`, `suspended`, `reactivated`, `deleted` |
| `comment`       | `token_minted`, `created`, `reply_created`, `archived`, `unarchived` |
| `abuse_report`  | `created`, `updated` |
| `claim`         | `blocked_takedown`, `authority_rotated` |
| `feedback`      | `lead_claim_pending` |
| `user`          | `created`, `signed_in`, `deleted`, `two_factor_enabled`, `two_factor_disabled`, `impersonation_started`, `impersonation_stopped` |

## Payload

Every callback sends a JSON body of the form:

```json
{
  "version": "2026-06-10",
  "event": {
    "id": "evt_123",
    "sequence": 4821,
    "tenantId": "tnt_123",
    "spaceId": "spc_123",
    "actor": { "type": "user", "id": "usr_123" },
    "code": "version.ready",
    "message": "Version is live",
    "details": {},
    "createdAt": "2026-06-30T12:00:00.000Z"
  }
}
```

`version` is the payload schema date, not your space version. The event `code`
is one of the events above. Callbacks are **at-least-once**. Dedupe on
`event.id`.

Each request also carries:

- **`Spacefast-Event-Id`**: the event id (same as `event.id`).
- **`Spacefast-Delivery-Id`**: this callback attempt's id.
- **`Spacefast-Signature`**: the signature. The next section describes it.

## Verify the signature

The `Spacefast-Signature` header looks like:

```text
Spacefast-Signature: t=1730289600, v1=5257a8f1c2d94e0b7a6355c8d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0
```

`t` is the unix timestamp. Each `v1=` is an **HMAC-SHA256** (hex) of the string
`` `${t}.${rawBody}` ``. Your signing secret is the key. Recompute the value
over the **raw request body**. Compare the values in constant time:

```js
import { createHmac, timingSafeEqual } from "node:crypto";

function verify(rawBody, header, secret) {
  const parts = Object.fromEntries(header.split(",").map((p) => p.trim().split("=")));
  const expected = createHmac("sha256", secret).update(`${parts.t}.${rawBody}`).digest("hex");
  // A header can carry more than one v1= during secret rotation; accept any match.
  const signatures = header.match(/v1=([0-9a-f]+)/g)?.map((s) => s.slice(3)) ?? [];
  const ok = signatures.some(
    (sig) =>
      sig.length === expected.length && timingSafeEqual(Buffer.from(sig), Buffer.from(expected)),
  );
  // Also reject stale timestamps to prevent replay.
  return ok && Math.abs(Date.now() / 1000 - Number(parts.t)) < 300;
}
```

During a secret rotation the header carries two `v1=` entries, one per secret;
accept a callback when any entry matches.

## Rotate the secret

Rotation is one API call and returns the replacement secret:

```bash
curl -X POST https://api.spacefast.com/v1/webhooks/whk_123/rotate-secret \
  -H "Authorization: Bearer $SPACEFAST_TOKEN" \
  -d '{ "expireNow": false }'
```

Spacefast returns a new secret (again, only once). By default the previous
secret stays valid for **24 hours**. You can roll it out without dropping
callbacks. Pass `expireNow: true` to cut over immediately.

## Attempts and retries

- `GET /v1/webhooks/:id/deliveries` lists attempts, newest first.
  `GET /v1/webhook-deliveries/:deliveryId` shows one.
- `POST /v1/webhook-deliveries/:deliveryId/redeliver` replays an event. The
  dashboard attempt log has a **Resend** button for the same thing.
- Each attempt has a **10-second timeout**. It follows no redirects. It reads
  at most 64 KiB of your response. Return a `2xx` to acknowledge.
- Failed attempts retry with exponential backoff. An attempt that never
  succeeds ends as `exhausted`.
- Spacefast protects an endpoint that keeps failing: it marks it **failing**
  after 8 consecutive failures and disables it after 32. Any success resets the
  counter. To re-enable a disabled
  webhook, set its status back to `active`.

Deleting a webhook stops its callbacks and removes it from API and dashboard
lists.
