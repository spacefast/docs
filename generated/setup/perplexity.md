---
title: "Connect Perplexity to Spacefast"
description: "Add Spacefast to Perplexity as a custom connector."
seo:
  canonical: "https://spacefast.com/docs/agents/perplexity/"
---

Add Spacefast to Perplexity as a custom connector.

**Add Spacefast as a custom connector** ([Hosted MCP server](/connect/hosted-mcp/)). Add the hosted Spacefast server from Perplexity's Plugins page.

```text
https://mcp.spacefast.com
```

1. Open Plugins, choose Add custom, then Add MCP connector.
2. Choose Remote, name it Spacefast and paste the address above.
3. Choose OAuth and Streamable HTTP, then save.
4. Sign in to Spacefast and approve access.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

## Plan limits

- **Free:** Custom connectors aren't included. ([source](https://www.perplexity.ai/changelog/what-we-shipped---march-13-2026), checked 2026-11-14)
- **Pro, Max and Enterprise:** Custom connectors work. On Enterprise, an admin has to allow members to add them. ([source](https://www.perplexity.ai/help-center/en/articles/13915507-adding-custom-remote-connectors), checked 2026-11-14)

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Perplexity documentation](https://www.perplexity.ai/help-center/en/articles/13915507-adding-custom-remote-connectors)
