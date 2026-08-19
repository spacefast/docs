---
title: "Connect OpenCode to Spacefast"
description: "Remote MCP with a browser sign-in, or the skill for terminal-driven publishes."
---

Connect hosted MCP with a browser sign-in, or install the skill for terminal-driven publishes.

**Hosted MCP.** Merge this OpenCode V2 config into `~/.config/opencode/opencode.json`, and then run `opencode mcp auth spacefast`.

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "spacefast": {
      "type": "remote",
      "url": "https://mcp.spacefast.com",
      "enabled": true
    }
  }
}
```

[Agent documentation](/agents) · [OpenCode's MCP docs](https://opencode.ai/docs/mcp-servers/)
