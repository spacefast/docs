---
title: Sign in
description: Sign in to Spacefast from the dashboard or CLI, including device authorization, tokens for CI, and provider profiles.
---

You sign in to Spacefast with WordPress.com. The dashboard session and the CLI
credential are separate: a browser login does not authenticate a terminal.

## Dashboard

Open [spacefast.com](https://spacefast.com) or `my.spacefast.com`. Then sign
in. After you claim a space or sign up, your teams and spaces appear under
`my.spacefast.com/<team>`.

You also need this login to claim an [anonymous space](/publishing/anonymous).
The claim link guides you through it.

## CLI device login

For interactive sign-in, the CLI uses browser-assisted device login:

```bash
sf login
```

`sf auth login` is the same command. The CLI prints a short code. It opens the
verification page, or it asks you to open the page. When you approve the
request, the CLI stores a credential on your computer. Check the result:

```bash
sf whoami
```

```bash
sf status
```

Log out and revoke the CLI-minted token when you can:

```bash
sf logout
```

## Non-interactive tokens

For CI and scripts, prefer a least-privilege [API key](/account/api-keys):

```bash
sf api-keys create --name ci --preset ci_deploy
```

Then export it for the process:

```bash
export SPACEFAST_TOKEN=st_...
```

Or store it during login:

```bash
sf login --token st_...
```

Never pass secrets as command arguments in shared logs. Prefer environment
variables or your CI secret store.

## Agent handoff

Agents and machines can redeem a one-use dashboard handoff link through stdin —
see [Auth and accounts for agents](/agents/accounts):

```bash
printf '%s\n' "$HANDOFF_LINK" | sf login --handoff
```

For durable automation, use an agent account with `SPACEFAST_AGENT_CONFIG`
instead of a broad personal key. See [Auth and accounts for
agents](/agents/accounts).

## Provider profiles

A provider profile binds an API base URL and a credential. `sf` can talk to the
public Spacefast control plane — or another Spacefast-compatible endpoint —
without exporting a new `SPACEFAST_TOKEN` every time you switch. Ordinary
single-account use never needs this.

List and select:

```bash
sf profiles
```

```bash
sf profiles use staging
```

When no `--profile` flag or `SPACEFAST_PROFILE` env is set, the CLI uses the
selected default profile.

Create, update, or remove:

```bash
sf profiles set acme --api-url https://api.acme-host.example --token st_...
```

```bash
sf profiles set acme --token ""
```

```bash
sf profiles rm staging
```

Any command accepts `--profile` (or `SPACEFAST_PROFILE`) and `--api-url`
(`SPACEFAST_API_URL`) for one-off targeting. Profiles are the durable form of
the same idea. Reach for them when you switch between production Spacefast and
a staging or [white-label control plane](/platforms), or when a platform or
agent setup publishes through a non-default API origin.

## Related

- [API keys](/account/api-keys) — presets, rotation, CI vs agent.
- [Teams](/account/teams) — which team the credential acts in.
- [MCP](/agents/mcp) — OAuth for hosted agents; local credentials for on-device MCP.
