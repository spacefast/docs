---
title: "Connect Goose to Spacefast"
description: "Add Spacefast as a Goose extension using stdio or hosted MCP."
seo:
  canonical: "https://spacefast.com/docs/agents/goose/"
---

Add Spacefast as a Goose extension using stdio or hosted MCP.

**Run Spacefast MCP on this computer** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Runs Spacefast On-Device MCP in Goose via npx.

```bash
goose configure # Add Extension -> Command-line Extension -> npx -y spacefast mcp
```

1. Run `goose configure`, choose Add Extension → Command-line Extension.
2. Enter `npx -y spacefast mcp` as the command.

## Other ways to connect

**Add hosted MCP in Goose** ([Hosted MCP server](/connect/hosted-mcp/)). Connect Goose to the hosted Spacefast MCP server with browser OAuth.

```text
https://mcp.spacefast.com
```

1. Run `goose configure`, choose Add Extension → Remote Extension (Streamable HTTP).
2. Paste the Spacefast MCP URL above and complete browser OAuth when prompted.

**Add to Goose** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Opens Goose with the Spacefast stdio MCP extension ready to install.

[Add to Goose](goose://extension?cmd=npx&arg=-y&arg=spacefast&arg=mcp)

1. Confirm adding the Spacefast extension in Goose.
2. Ask Goose to publish a folder — sign in to Spacefast in the browser when asked.

**Install just the skill** ([Skill only](/connect/skill/)). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Goose documentation](https://block.github.io/goose/docs/getting-started/using-extensions)
