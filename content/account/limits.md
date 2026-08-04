---
title: Limits
description: Understand team entitlements, anonymous publishing limits, and hard runtime safety rules.
---

There is no trustworthy universal plan table in a pre-launch product. Read the
limits resolved for the team you are actually using.

## Team entitlements

The dashboard shows current storage, members, domains, publish capacity,
routing features, and retention for the selected team. You can read the same
policy from the API:

```bash
sf api GET /v1/teams/{teamId}/plan-policy
```

```bash
sf api GET /v1/teams/{teamId}/entitlements
```

When a publish or setting exceeds that policy, the API and CLI return a
specific diagnostic. Treat that receipt as authoritative instead of assuming
a limit from a plan name.

## Anonymous spaces

Before a space is claimed:

- one file can be at most 50 MB;
- one version can contain at most 100 MB and 1,000 files;
- one network address can publish at most 20 times per hour;
- only ordinary web content is served;
- custom domains, external proxy execution, and `_headers` Basic Auth are not
  available;
- the space must be claimed within six hours.

Around 100 visits can pause an unclaimed space behind a claim page. Claiming it
restores the space without changing its live URL. See [Publish without an
account](/publishing/anonymous).

## Runtime safety rules

These rules do not change with a plan:

- `_redirects` and `_headers` compile into one routing policy.
- Redirects, rewrites, header blocks, Basic Auth blocks, and proxy routes all
  count toward that policy's resolved routing capacity.
- Files mode cannot enable an SPA fallback.
- SPA mode requires a root `index.html`.
- Server-executable files are never executed by a static space.
- Exceeding storage blocks new publishes; it does not take the current live
  version down.

For billing state and options offered to the account, see [Billing and
usage](/account/billing).
