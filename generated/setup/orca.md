---
title: "Connect Orca to Spacefast"
description: "Orca runs Claude Code and Codex side by side across worktrees. Add Spacefast once and every workspace can publish."
seo:
  canonical: "https://spacefast.com/docs/agents/orca/"
---

Orca runs Claude Code and Codex side by side across worktrees. Add Spacefast once and every workspace can publish.

**Run Spacefast MCP on this computer** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Adds Spacefast On-Device MCP to Claude Code so every Orca workspace inherits it.

```bash
claude mcp add --scope user --transport stdio spacefast -- npx -y spacefast mcp
```

1. Open a new Orca workspace so the updated MCP config loads.
2. For Codex sessions in Orca, also run `codex mcp add spacefast -- npx -y spacefast mcp`.

## Other ways to connect

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

[Agent documentation](/agents/) · [Orca documentation](https://github.com/stablyai/orca)
