---
title: API keys
description: Create scoped API keys with presets for CI, publishers, admins, and billing readers.
---

API keys are bearer credentials for the [REST API](/api), CLI
(`SPACEFAST_TOKEN` / `sf login --token`), and automation. The secret is shown
once at creation — store it in a secret manager, not in git or chat.

## Create and list

```bash
sf api-keys create --name ci --preset ci_deploy
```

```bash
sf api-keys ls
```

Keys belong to the selected [team](/account/teams). Pass `--team` when the default
team is wrong.

## Presets

Pick the smallest preset that can do the job. Available presets:

| Preset            | Typical use                                             |
| ----------------- | ------------------------------------------------------- |
| `ci_deploy`       | Pipelines that publish to spaces they can reach         |
| `space_publisher` | Default. Publish and operate spaces without broad admin |
| `space_admin`     | Broader space administration                            |
| `site_admin`      | Site-level admin on spaces the key can reach            |
| `domain_manager`  | Attach and manage domains / DNS                         |
| `team_admin`      | Team administration                                     |
| `billing_viewer`  | Read plan and billing state                             |

The preset compiles into a concrete policy at creation. Device-login approval
can also mint a key under one of these presets when you approve a CLI or agent
device request.

## Rotation

There is no in-place secret rotate that keeps the same id. Create a
replacement, update CI or local env, then revoke the old key:

```bash
sf api-keys create --name ci-2026-08 --preset ci_deploy
```

```bash
sf api-keys revoke key_123
```

`delete` and `rm` are aliases of revoke.

## CI vs agents

- **CI / one-off deploy:** `ci_deploy` (or another tight preset), masked in the
  pipeline, injected as `SPACEFAST_TOKEN`.
- **Long-lived agent automation:** prefer an agent account with
  `SPACEFAST_AGENT_CONFIG` over a broad personal key — see [Agents](/getting-started/agents).
- **Hosted MCP:** uses OAuth; do not paste API keys into prompts — see
  [MCP](/reference/mcp).

After claiming an anonymous space with agent continuation on, the claim token
can be exchanged once for a publish-only key scoped to that space. That key
still shows under Account → Access tokens and can be revoked there.

## Related

- [Auth](/account/sign-in) — device login and storing tokens.
- [Teams](/account/teams) — team scope for keys.
- [Billing](/account/billing) — what `billing_viewer` can read.
- [REST API](/api) — `Authorization: Bearer` contract.
