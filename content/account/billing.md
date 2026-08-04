---
title: Billing and limits
description: Inspect the plan, usage, and entitlements attached to a Spacefast team, and the runtime safety rules no plan can change.
---

Billing belongs to a [team](/account/teams), not to an individual space. The
team's current entitlements decide its storage, members, custom domains,
publishing capacity, routing features, and retention.

There is no trustworthy universal plan table in a pre-launch product. Read the
limits that Spacefast resolves for the team you actually use.

## See the current state

Open the team's billing and usage settings in the dashboard. That page is the
authority for the plan and purchase options currently offered to the account.

Automation can read the same state:

```bash
sf api GET /v1/teams/{teamId}/billing
```

```bash
sf api GET /v1/teams/{teamId}/plan-policy
```

```bash
sf api GET /v1/teams/{teamId}/entitlements
```

`plan-policy` reports the limits and behaviors that Spacefast enforces for the
team. `entitlements` reports the resolved capabilities. Exact response shapes
live in the [API reference](/api/reference).

A `billing_viewer` [API key](/account/api-keys) can read billing state without
broader administrative access.

When a publish or setting exceeds the team's policy, the API and CLI return a
specific diagnostic. Treat that diagnostic as authoritative. Do not assume a
limit from a plan name.

## Change billing

Use the dashboard for any purchase, payment method, invoice, upgrade, or
downgrade offered to the account. The CLI reads billing state. It does not buy
or change a subscription.

## Anonymous spaces

Unclaimed spaces run under fixed pre-claim limits — file size, version size,
publish rate, web-content-only serving — and a six-hour claim window; too much
traffic pauses them behind a claim page until claimed. The full list is on
[Publish without an account](/publishing/anonymous).

## Runtime safety rules

These rules do not change with a plan:

- Spacefast compiles `_redirects` and `_headers` into one routing policy.
- Redirects, rewrites, header blocks, Basic Auth blocks, and proxy routes all
  count toward that policy's resolved routing capacity.
- Files mode cannot enable an SPA fallback.
- SPA mode requires a root `index.html`.
- A static space never executes server-executable files.
- If you exceed storage, Spacefast blocks new publishes. It does not take the
  current live version down.
