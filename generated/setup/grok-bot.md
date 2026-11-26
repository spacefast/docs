---
title: "Connect Grok Bot to Spacefast"
description: "Ask your Grok Bot to add Spacefast, or add the Spacefast plugin."
seo:
  canonical: "https://spacefast.com/docs/agents/grok-bot/"
---

Ask your Grok Bot to add Spacefast, or add the Spacefast plugin.

**[Ask your Bot to add Spacefast](https://cursor.com/grok-bot/link/v1/prompt?text=Add%20Spacefast%20as%20a%20custom%20connector%3A%20open%20Connect%20apps%2C%20choose%20Add%20a%20custom%20connector%2C%20name%20it%20Spacefast%2C%20pick%20Remote%20HTTPS%20and%20use%20the%20server%20URL%20https%3A%2F%2Fmcp.spacefast.com.%20Then%20let%20me%20sign%20in%20to%20Spacefast.)** ([Prompt link](/connect/prompt-link/))

1. Read the prompt, then send it.
2. Sign in to Spacefast and approve access when the Bot asks.

On a Team Bot, an admin's MCP policy can block the server.

## Other ways to connect

**Install from the plugin marketplace** ([Marketplace listing](/connect/marketplace/)). Install Spacefast from the plugin directory, then connect your account.

[Install from the plugin marketplace](https://x.ai/bot/plugin/72532022)

**Copy the setup prompt** ([Setup prompt](/connect/setup-prompt/)). Copy the setup prompt and paste it into your Grok Bot. Your Bot connects Spacefast and guides you through sign-in.

```text
Add Spacefast as a custom connector: open Connect apps, choose Add a custom connector, name it Spacefast, pick Remote HTTPS and use the server URL https://mcp.spacefast.com. Then let me sign in to Spacefast.
```

1. Paste the prompt into your Bot's chat and send it.
2. Approve adding Spacefast and complete Spacefast OAuth sign-in when asked.

For a Team Bot, its owner or a manager changes the shared setup. Each teammate signs in with their own account.

## Plan limits

- **Premium, Super and Ultra:** Grok Bot comes with these plans. Plus and Free don't include it. ([source](https://docs.x.ai/x-subscription/grok-bot), checked 2026-11-14)
- **Team bots:** An admin's MCP policy can block the server, and then it can't be saved. ([source](https://docs.x.ai/grok-bot/computer-and-apps), checked 2026-11-14)

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Grok Bot documentation](https://docs.x.ai/grok-bot/computer-and-apps)
