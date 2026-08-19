---
search:
  tags: [entitlements, limits, quotas, usage, billing]
title: Plans, limits, and usage
description: Learn what entitlements are, where to see your team's limits and metered usage, and what happens when you reach a limit.
---

Spacefast enforces plan limits per [team](/account/teams).

## What an entitlement is

An **entitlement** is a limit or feature that your team is allowed to
use.
Spacefast resolves entitlements per team as **plan limits plus any
additive grants**. A limit resolves to a number, or to
`"unlimited"` when the plan does not bound that axis.

The plans are Free, Personal, Work, and Enterprise, and API responses
carry the team's plan as a `planCode`. Do not hard-code limit values in
scripts. Read the resolved entitlements instead, because a grant can
change them without a plan change.

## Where to see entitlements and usage

In the dashboard, open the team's **Usage & billing** page at
`my.spacefast.com/<team>`. It shows the plan, entitlements, and safety
limits attached to the team.

The API exposes the same data in four team-scoped reads:

| Endpoint | Returns |
| -------- | ------- |
| `GET /v1/teams/{teamId}/entitlements` | The resolved entitlements. |
| `GET /v1/teams/{teamId}/plan-policy` | Plan limits, current usage, and disabled behaviors as enforced at publish and serving time. |
| `GET /v1/teams/{teamId}/billing` | The plan, subscription state, and billable usage meters. |
| `GET /v1/teams/{teamId}/usage` | Current usage counters: spaces, domains, members, storage, and monthly publishes. |

Two space-scoped reads narrow the view to one space:

- `GET /v1/spaces/{spaceId}/plan-policy` returns the effective limits and
  disabled behaviors that apply to that space's publishes and serving.
- `GET /v1/spaces/{spaceId}/usage` returns what the space consumed.

All six endpoints are in the [API reference](/api/reference).

## What entitlements cover

The resolved limits bound these axes, among others:

- storage bytes
- team members and sub-teams
- external domain groups
- monthly publishes
- routing rules
- file size (`maxFileBytes`) and files per version (`maxVersionFiles`)
- share links, invites, and pending access requests per space
- daily invite emails
- audit and build log retention hours

Entitlements also carry feature switches:

- whether external proxy upstreams compile (`externalProxy`)
- whether `_pages/*.html` full-page takeovers compile (`pagesTemplates`)
- whether `theme.hideSpacefastBranding` removes the badge from default
  pages
- the number of PHP workers per serving site
- whether version diagnostics are included

Every team receives its own dedicated runtime site on every plan.

Request logs go back 48 hours on Free, 30 days on Personal, and are
unlimited on Work and Enterprise. For details, see
[monitoring](/operate/monitoring).

## What usage is metered

`GET /v1/teams/{teamId}/usage` returns three team counters:

- **Spaces, domains, and members**: the live spaces, the external domain
  groups counted against the plan, and the team members.
- **Storage**: the disk actually occupied across the team's spaces, as
  measured by the serving infrastructure. Nothing is deduplicated: a
  file present in two spaces sits on two disks and counts twice. This
  meter lags the present by about an hour.
- **Monthly publishes**: user pushes and CI builds, pooled, per
  calendar month.

Space meters (`GET /v1/spaces/{spaceId}/usage`) report what the space
consumed over the most recent settled measurement period: storage,
compute seconds, bandwidth bytes, emails sent, and function invocations
(with a separate error count). Storage billing is based on this storage
meter: the average bytes actually on disk during the period, not the
size of what was uploaded. The infrastructure that serves the space
measures these numbers, and they lag. The response carries the exact
period it describes and when it was read. Nothing in it means
"right now". A space that has never served reports `usage: null`.

## What happens at a limit

Reaching a quota blocks new work but **never takes the live site
down**. Storage exhaustion blocks new publishes while the current
version keeps serving (see [versions](/publish/versions)). Even a
past-due tenant keeps serving while Spacefast rejects mutations.

Each limit has a stable error code, so scripts can react precisely:

| You hit | Error code |
| ------- | ---------- |
| Storage allowance | [`storage_quota_exceeded`](/errors/storage_quota_exceeded) |
| Version quota on a space | [`version_quota_exceeded`](/errors/version_quota_exceeded) |
| Space quota when claiming a space | [`claimed_space_quota_exceeded`](/errors/claimed_space_quota_exceeded) |
| External domain allowance | [`domain_quota_exceeded`](/errors/domain_quota_exceeded) |
| Team seat limit (pending invitations count) | [`team_member_quota_exceeded`](/errors/team_member_quota_exceeded) |
| Routing-rule allowance in `_redirects` and `_headers` | [`routing_rules_over_plan`](/errors/routing_rules_over_plan) |
| Proxy routes to external upstreams on Free | [`free_external_proxy_disabled`](/errors/free_external_proxy_disabled) |
| A feature the plan or deployment lacks | [`feature_unavailable`](/errors/feature_unavailable) |
| A log query beyond the plan's retention | [`log_retention_clamped`](/errors/log_retention_clamped) |
| An unpaid balance | [`tenant_past_due`](/errors/tenant_past_due) |

Not every limit fails the request. The plan policy lists **disabled
behaviors**: things the plan disables instead of failing publishes.
Those behaviors are `free_external_proxy_disabled` and
`routing_rules_over_plan`. Each entry states how the disabled behavior appears: as a warning, as a
platform page, or ignored. `log_retention_clamped` clamps the log range
to what the plan retains instead of rejecting the query.

To find out when a team reaches the monthly publish cap, subscribe a
[webhook](/operate/webhooks) to the
`team.builds_deploys_quota_exceeded` event.
