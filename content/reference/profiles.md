---
title: Provider profiles
description: Point the Spacefast CLI at named API endpoints and credentials with sf profiles.
---

A provider profile binds an API base URL and a credential so `sf` can talk to
the public Spacefast control plane — or another Spacefast-compatible endpoint —
without exporting a new `SPACEFAST_TOKEN` every time you switch.

## List and select

```bash
sf profiles
```

```bash
sf profiles use staging
```

When no `--profile` flag or `SPACEFAST_PROFILE` env is set, the CLI uses the
selected default profile.

## Create or update

```bash
sf profiles set acme --api-url https://api.acme-host.example --token st_...
```

Clear a saved token without deleting the profile:

```bash
sf profiles set acme --token ""
```

Remove a profile and its stored credential:

```bash
sf profiles rm staging
```

## Per-command override

Any command accepts `--profile` (or `SPACEFAST_PROFILE`) and `--api-url`
(`SPACEFAST_API_URL`) for one-off targeting. Profiles are the durable form of
the same idea.

## When you need this

- Switching between production Spacefast and a staging or white-label control
  plane.
- Keeping separate credentials per environment without juggling shell exports.
- Platform and agent setups that publish through a non-default API origin.

Ordinary single-account use only needs [`sf login`](/account/sign-in).

## Related

- [Auth](/account/sign-in) — device login and tokens.
- [API keys](/account/api-keys) — minting credentials to store in a profile.
- [Platforms](/platforms) — hosting customer sites on Spacefast.
