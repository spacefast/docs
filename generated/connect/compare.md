---
title: "Compare the ways to connect to Spacefast"
description: "Which AI agents support each way to connect to Spacefast, and the plan limits that apply."
seo:
  canonical: "https://spacefast.com/docs/connect/compare/"
---

Each row is an agent, and each column is a [way to connect](/connect/). Agents are listed in the order the agent guides use.

| Agent | Directory connector | Marketplace listing | Spacefast plugin | MCP on your computer (stdio) | Hosted MCP server | Prompt link | Setup prompt | Spacefast CLI | Skill only | Desktop extension | GitHub MCP Registry | Git push |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude](/agents/claude-app/) | Yes |  | Yes |  |  |  | Yes |  |  |  |  |  |
| [ChatGPT](/agents/chatgpt/) |  | Yes |  |  | Yes |  | Yes |  |  |  |  |  |
| [Cursor](/agents/cursor/) |  | Yes | Yes |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Antigravity](/agents/antigravity/) |  | Yes | Yes |  | Yes |  | Yes |  | Yes |  |  |  |
| [Grok Bot](/agents/grok-bot/) |  | Yes |  |  |  | Yes | Yes |  |  |  |  |  |
| [OpenClaw](/agents/openclaw/) |  |  |  | Yes |  |  | Yes | Yes |  |  |  | Yes |
| [Raycast](/agents/raycast/) |  |  |  |  | Yes |  | Yes |  |  |  |  |  |
| [Muse](/agents/muse/) |  |  |  |  |  |  | Yes |  |  |  |  |  |
| [Claude Code](/agents/claude-code/) | Yes |  | Yes | Yes | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Claude Desktop](/agents/claude-desktop/) | Yes |  | Yes |  |  |  | Yes |  |  |  |  |  |
| [Claude Cowork](/agents/claude-cowork/) | Yes |  | Yes |  |  |  | Yes |  |  |  |  |  |
| [Codex](/agents/codex/) |  | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [ChatGPT Work](/agents/chatgpt-work/) |  | Yes |  |  |  |  | Yes |  |  |  |  |  |
| [dots and ChatGPT Space](/agents/chatgpt-space/) |  | Yes |  |  |  |  | Yes |  |  |  |  |  |
| [VS Code](/agents/vscode/) |  |  | Yes |  | Yes |  | Yes | Yes | Yes |  | Yes | Yes |
| [GitHub Copilot CLI](/agents/github-copilot/) |  |  | Yes |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [GitHub Copilot app](/agents/github-copilot-app/) |  |  | Yes |  | Yes |  | Yes |  |  |  |  |  |
| [OpenCode](/agents/opencode/) |  |  |  | Yes | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Zed](/agents/zed/) |  |  |  | Yes | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Devin Desktop](/agents/devin-desktop/) |  |  | Yes |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Devin Cloud](/agents/devin-cloud/) |  |  |  |  | Yes |  | Yes |  | Yes |  |  |  |
| [Conductor](/agents/conductor/) |  |  |  | Yes |  |  | Yes |  |  |  |  |  |
| [Orca](/agents/orca/) |  |  |  | Yes |  |  | Yes |  | Yes |  |  |  |
| [Goose](/agents/goose/) |  |  |  | Yes | Yes |  | Yes |  | Yes |  |  |  |
| [Kiro](/agents/kiro/) |  |  |  | Yes | Yes |  | Yes |  | Yes |  |  |  |
| [Hermes](/agents/hermes/) |  |  |  | Yes |  |  | Yes | Yes |  |  |  | Yes |
| [Pi](/agents/pi/) |  |  |  | Yes |  |  | Yes | Yes | Yes |  |  | Yes |
| [LM Studio](/agents/lm-studio/) |  |  |  | Yes | Yes |  | Yes |  |  |  |  |  |
| [Mistral Le Chat](/agents/mistral/) |  |  |  |  | Yes |  | Yes |  |  |  |  |  |
| [Perplexity](/agents/perplexity/) |  |  |  |  | Yes |  | Yes |  |  |  |  |  |
| [Any MCP client](/agents/any-mcp/) |  |  |  | Yes | Yes |  | Yes |  |  |  |  |  |
| [Grok Build](/agents/grok-build/) |  |  |  |  | Yes |  |  |  |  |  |  |  |
| [Instinct](/agents/instinct/) |  |  |  |  |  |  | Yes |  |  |  |  |  |
| [Microsoft Copilot](/agents/microsoft-copilot/) |  |  |  |  |  |  | Yes |  |  |  |  |  |
| [T3 Chat](/agents/t3-chat/) |  |  |  |  |  |  | Yes |  |  |  |  |  |
| [Amp](/agents/amp/) |  |  |  |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Warp](/agents/warp/) |  |  |  |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Factory Droid](/agents/factory-droid/) |  |  | Yes |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Cline](/agents/cline/) |  |  |  |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Indent](/agents/indent/) |  |  |  |  | Yes |  | Yes |  |  |  |  |  |
| [Poke](/agents/poke/) |  |  |  |  | Yes |  | Yes |  |  |  |  |  |
| [Grok](/agents/grok/) |  |  |  |  | Yes |  |  |  |  |  |  |  |

## Plan limits

What works on which plan, from each vendor's own pages.

| Agent | Plan | Limit |
| --- | --- | --- |
| [Claude](/agents/claude-app/) | All plans | Directory connectors work on every plan. On Team and Enterprise, an owner has to turn them on first. [Source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) |
| [Claude](/agents/claude-app/) | Free | One custom connector at most, and no plugins. [Source](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) |
| [Claude](/agents/claude-app/) | Pro, Max, Ultra, Team and Enterprise | Plugins work. A plugin's local MCP server runs in Claude Code and in Cowork on your computer, not in chat. [Source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude) |
| [ChatGPT](/agents/chatgpt/) | Free, Go, Plus and Pro | The Spacefast plugin installs on every personal plan. [Source](https://chatgpt.com/pricing) |
| [ChatGPT](/agents/chatgpt/) | Business and Enterprise | Plugins are on by default on Business. On Enterprise an admin turns them on first. [Source](https://chatgpt.com/features/plugins/) |
| [ChatGPT](/agents/chatgpt/) | Free and Go | No developer mode, so you can't add Spacefast as a custom MCP server. Use the plugin. [Source](https://chatgpt.com/pricing) |
| [Grok Bot](/agents/grok-bot/) | Premium, Super and Ultra | Grok Bot comes with these plans. Plus and Free don't include it. [Source](https://docs.x.ai/x-subscription/grok-bot) |
| [Grok Bot](/agents/grok-bot/) | Team bots | An admin's MCP policy can block the server, and then it can't be saved. [Source](https://docs.x.ai/grok-bot/computer-and-apps) |
| [Raycast](/agents/raycast/) | Free | No AI and no MCP servers. Raycast AI and MCP need Pro, Teams Pro or Enterprise. [Source](https://www.raycast.com/pricing) |
| [Claude Desktop](/agents/claude-desktop/) | All plans | Directory connectors work on every plan. On Team and Enterprise, an owner has to turn them on first. [Source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) |
| [Claude Desktop](/agents/claude-desktop/) | Free | One custom connector at most, and no plugins. [Source](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) |
| [Claude Desktop](/agents/claude-desktop/) | Pro, Max, Ultra, Team and Enterprise | Plugins work. A plugin's local MCP server runs in Claude Code and in Cowork on your computer, not in chat. [Source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude) |
| [Claude Cowork](/agents/claude-cowork/) | Free | Cowork isn't available on the Free plan. [Source](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) |
| [Claude Cowork](/agents/claude-cowork/) | Pro, Max and Ultra | New Cowork tasks run in the cloud, where a plugin's local MCP server doesn't run. The connector works there. [Source](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile) |
| [Claude Cowork](/agents/claude-cowork/) | Team and Enterprise | An owner has to turn on connectors, and may limit which plugin marketplaces you can add. [Source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) |
| [Codex](/agents/codex/) | ChatGPT Free and Go | Codex works in the desktop app only, with limited use. [Source](https://learn.chatgpt.com/docs/pricing) |
| [Codex](/agents/codex/) | ChatGPT Plus and above | Codex works on the web, in the CLI, in the IDE extension and on iOS. [Source](https://learn.chatgpt.com/docs/pricing) |
| [ChatGPT Work](/agents/chatgpt-work/) | Free and Go | ChatGPT Work is limited and runs in the desktop app only. [Source](https://chatgpt.com/pricing) |
| [ChatGPT Work](/agents/chatgpt-work/) | Plus and Pro | ChatGPT Work runs on the desktop, the web and mobile. [Source](https://chatgpt.com/pricing) |
| [ChatGPT Work](/agents/chatgpt-work/) | Free, Go, Plus and Pro | The Spacefast plugin installs on every personal plan. [Source](https://chatgpt.com/pricing) |
| [ChatGPT Work](/agents/chatgpt-work/) | Business and Enterprise | Plugins are on by default on Business. On Enterprise an admin turns them on first. [Source](https://chatgpt.com/features/plugins/) |
| [dots and ChatGPT Space](/agents/chatgpt-space/) | Free, Go and Plus | dots and ChatGPT Space aren't included. [Source](https://chatgpt.com/pricing) |
| [dots and ChatGPT Space](/agents/chatgpt-space/) | Pro, Business Premium and Enterprise | dots are included. On Pro they need you to be 18 or older and outside the EEA, the UK and Switzerland. [Source](https://learn.chatgpt.com/docs/dots.md) |
| [Perplexity](/agents/perplexity/) | Free | Custom connectors aren't included. [Source](https://www.perplexity.ai/changelog/what-we-shipped---march-13-2026) |
| [Perplexity](/agents/perplexity/) | Pro, Max and Enterprise | Custom connectors work. On Enterprise, an admin has to allow members to add them. [Source](https://www.perplexity.ai/help-center/en/articles/13915507-adding-custom-remote-connectors) |
| [Microsoft Copilot](/agents/microsoft-copilot/) | Personal accounts | Copilot connects only to OneDrive, Outlook.com, Google Drive and Gmail. It has no custom connectors or MCP. [Source](https://support.microsoft.com/en-us/microsoft-copilot/connecting-microsoft-copilot-to-other-services) |
| [T3 Chat](/agents/t3-chat/) | All plans | T3 Chat has no MCP, connectors, plugins or skills. [Source](https://t3.chat/faq) |

## No longer supported

- [Windsurf](/agents/windsurf/): use [Devin Desktop](/agents/devin-desktop/) instead.
- [Gemini CLI](/agents/gemini-cli/): use [Antigravity](/agents/antigravity/) instead.
- [Continue](/agents/continue/): use [Cursor](/agents/cursor/) instead.
- [Roo Code](/agents/roo-code/): use [Cline](/agents/cline/) instead.
- [Jules](/agents/jules/): use [Antigravity](/agents/antigravity/) instead.
