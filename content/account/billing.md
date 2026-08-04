---
title: Billing and usage
description: Inspect the plan, usage, and entitlements attached to a Spacefast team.
---

Billing belongs to a [team](/account/teams), not to an individual space. The
team's current entitlements decide its storage, members, custom domains,
publishing capacity, routing features, and retention.

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

`plan-policy` reports the limits and behaviors enforced for the team.
`entitlements` reports the resolved capabilities. Exact response shapes live
in the [API reference](/api/reference).

A `billing_viewer` [API key](/account/api-keys) can read billing state without
broader administrative access.

## Change billing

Use the dashboard for any purchase, payment method, invoice, upgrade, or
downgrade offered to the account. The CLI reads billing state but does not buy
or change a subscription.

See [Limits](/account/limits) for the difference between team entitlements and
hard runtime safety limits.
