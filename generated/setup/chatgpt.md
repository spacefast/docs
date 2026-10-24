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

**Add Spacefast as a custom MCP server.** Add the hosted MCP server yourself from ChatGPT's Plugins page.

```text
https://mcp.spacefast.com
```

1. Open [chatgpt.com/plugins](https://chatgpt.com/plugins), choose +, then Add custom MCP server.
2. Name it Spacefast and paste the address above as the server URL.
3. Choose OAuth, check I understand and want to continue, then choose Create as a plugin.
4. Install the plugin, then sign in to Spacefast and approve access.
5. In a new chat, type @ and pick Spacefast.

Custom MCP servers need ChatGPT on the web and a Business, Enterprise, or Edu workspace. On Business, only admins and owners can add one.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [ChatGPT documentation](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt)
