---
title: Auth and accounts
description: Which credential an agent should use — handoff links, API keys, agent accounts — and the secret-handling rules.
---

Interactive humans use [`sf login`](/cli#sf-login). CI uses a masked
[`ci_deploy` API key](/account/api-keys). Hosted agents should prefer
[MCP](/agents/mcp) OAuth or a dashboard handoff link redeemed with
`sf login --handoff`. Never paste secrets into prompts.

## Handoff links

The dashboard can mint a one-use handoff link for an agent or machine. Redeem
it through stdin. Never paste the link into argv:

```bash
printf '%s\n' "$HANDOFF_LINK" | sf login --handoff
```

## Agent accounts

For durable automation, create an agent account. Do not share a broad personal
API key. Agent accounts use OAuth `private_key_jwt`. The CLI or On-Device MCP
loads them through `SPACEFAST_AGENT_CONFIG`. Scope the account to the teams and
capabilities it needs. For a one-off CI deploy, a masked `ci_deploy` API key is
the smaller option.

## Secret handling

Treat claim tokens, upload tokens, device codes, API keys, Link URLs, and
`.spacefast` state as credentials. Do not print, commit, archive, or include
them in logs and chat. Avoid shell tracing when secrets are present. Pass
credentials through the environment or the target platform's secret store.
Clear temporary copies after use.

## Related

- [`sf login`](/cli#sf-login) — device login, `--handoff`, and `--token`.
- [API keys](/account/api-keys) — presets, rotation, CI vs agent.
- [Publish as an agent](/agents/publishing) — claim tokens and continuation.
