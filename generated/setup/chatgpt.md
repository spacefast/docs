---
title: "Connect ChatGPT to Spacefast"
description: "Add Spacefast to ChatGPT on the web so it can publish what you build."
seo:
  canonical: "https://spacefast.com/setup/chatgpt/"
---

Add Spacefast to ChatGPT on the web so it can publish what you build.

**Install from the plugin marketplace.** Install Spacefast from the plugin directory, then connect your account.

[Install from the plugin marketplace](https://chatgpt.com/plugins/plugin_asdk_app_6aa80fbfddb0819188f1304e303c856d)

## Other ways to connect

**Add Spacefast as a custom MCP server.** Add Spacefast as a custom MCP server in ChatGPT, then approve OAuth.

```text
https://mcp.spacefast.com
```

1. On [ChatGPT web](https://chatgpt.com), open Plugins, choose +, then Add custom MCP server.
2. Name it Spacefast and enter the server address shown above.
3. Choose OAuth, then review the risk warning.
4. Select I understand and want to continue, then choose Create as a plugin.
5. Install the resulting plugin. When asked, sign in to Spacefast and approve access.
6. In a conversation, type @ and select Spacefast. Run the connection check before publishing.

Use ChatGPT on the web. Adding and using custom MCP servers depends on your workspace permissions and security settings. If the option is missing or blocked, ask your workspace admin or use the published Spacefast plugin when available to your account.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [ChatGPT documentation](https://developers.openai.com/api/docs/guides/custom-mcp-server)
