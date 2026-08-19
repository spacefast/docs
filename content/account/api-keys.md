---
search:
  tags: [token, credentials, ci]
title: API keys
description: Create scoped API keys with presets for CI, publishers, admins, and billing readers.
---

API keys are bearer credentials for the [REST API](/api), the CLI
(`SPACEFAST_TOKEN` / `sf login --token`), and automation. Spacefast shows
the secret only once, when you create the key. Store it in a secret
manager, never in git or chat.

## Create and list

```bash
sf api-keys create --name ci --preset ci_deploy
sf api-keys ls
```

Keys belong to the selected [team](/account/teams). If the default team is
wrong, pass `--team`.

## Presets

Pick the smallest preset that can do the job:

| Preset            | Typical use                                             |
| ----------------- | ------------------------------------------------------- |
| `ci_deploy`       | Pipelines that publish to spaces they can reach         |
| `space_publisher` | Default. Publish and operate spaces without broad admin |
| `space_admin`     | Broader space administration                            |
| `site_admin`      | Site-level admin on spaces the key can reach            |
| `domain_manager`  | Attach and manage domains / DNS                         |
| `team_admin`      | Team administration                                     |
| `billing_viewer`  | Read plan and billing state                             |

When you approve a CLI or agent device request, Spacefast can also mint a
key under one of these presets.

## Rotation

You cannot rotate a secret in place under the same ID. Instead:

1. Create a replacement key.
2. Update CI or your local environment.
3. Revoke the old key.

```bash
sf api-keys create --name ci-2026-08 --preset ci_deploy
sf api-keys revoke key_123
```

`delete` and `rm` are aliases of revoke.

## Credentials for CI and agents

- **CI or one-off publish**: use `ci_deploy` or another tight preset, mask
  it in the pipeline, and inject it as `SPACEFAST_TOKEN`.
- **Long-lived agent automation**: prefer an agent account with
  `SPACEFAST_AGENT_CONFIG` over a broad personal key. See
  [Agents](/agents).
- **Hosted MCP**: uses OAuth, so do not paste API keys into prompts. See
  [MCP](/agents/mcp).

If you claim an anonymous space with agent continuation on, the agent can
exchange the space key (`sfc_...`) once for a publish-only key scoped to
that space. See [Publish as an agent](/agents/publishing).

## Related

- [`sf login`](/cli#sf-login) covers device login and `--token` storage.
