---
title: Sign in
description: Sign in to Spacefast from the dashboard or CLI, including device authorization and tokens for CI.
---

Spacefast accounts sign in with WordPress.com. The dashboard session and the
CLI credential are separate: finishing login in the browser does not
automatically authenticate a terminal until the CLI completes its own flow.

## Dashboard

Open [spacefast.com](https://spacefast.com) or `my.spacefast.com` and sign in.
After claim or signup, your teams and spaces appear under
`my.spacefast.com/<team>`.

Claiming an [anonymous space](/publishing/anonymous) also requires this login —
the claim link walks you through it.

## CLI device login

Interactive auth is browser-assisted device login:

```bash
sf login
```

`sf auth login` is the same command. The CLI prints a short code, opens (or
asks you to open) the verification page, and stores a credential locally when
approval succeeds. Check the result:

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

Then either export it for the process:

```bash
export SPACEFAST_TOKEN=st_...
```

or store it during login:

```bash
sf login --token st_...
```

Never pass secrets as command arguments in shared logs. Prefer environment
variables or your CI secret store.

## Agent handoff

The dashboard can mint a one-use handoff link for an agent or machine. Redeem
it through stdin — never paste the link into argv:

```bash
printf '%s\n' "$HANDOFF_LINK" | sf login --handoff
```

For durable automation that should not share a personal key, use an agent
account with `SPACEFAST_AGENT_CONFIG` as described in [Agents](/getting-started/agents).

## Provider profiles

If you talk to more than one Spacefast-compatible control plane, bind each
endpoint and credential with [CLI profiles](/reference/profiles).

## Related

- [API keys](/account/api-keys) — presets, rotation, CI vs agent.
- [Teams](/account/teams) — which team the credential acts in.
- [MCP](/reference/mcp) — OAuth for hosted agents; local credentials for on-device MCP.
