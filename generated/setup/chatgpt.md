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

**Add Spacefast as a custom app.** Connect the hosted MCP server directly with Developer mode.

```text
https://mcp.spacefast.com
```

1. In [ChatGPT on the web](https://chatgpt.com), open Settings → Security and login and turn on Developer mode.
2. Open [chatgpt.com/plugins](https://chatgpt.com/plugins) and choose + to create an app.
3. Paste the address above and choose OAuth.
4. Connect the app, then sign in to Spacefast and approve access.
5. In a conversation, open the Plus menu, choose Developer mode, then choose Spacefast.

Read and write tools work on eligible accounts only, subject to your confirmation settings and workspace policies.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [ChatGPT documentation](https://developers.openai.com/api/docs/guides/developer-mode)
