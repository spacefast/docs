---
title: "Compare the ways to connect to Spacefast"
description: "Which AI agents support each way to connect to Spacefast, and the plan limits that apply."
seo:
  canonical: "https://spacefast.com/docs/connect/compare/"
---

Each row is an agent, and each column is a [way to connect](/connect/). Agents are listed in the order the setup pages use.

| Agent | Directory connector | Marketplace listing | Spacefast plugin | MCP on your computer (stdio) | Hosted MCP server | Prompt link | Setup prompt | Spacefast CLI | Skill only | Desktop extension | GitHub MCP Registry | Git push |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Claude Code](/setup/claude-code/) | Yes |  | Yes | Yes | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [ChatGPT](/setup/chatgpt/) |  | Yes |  |  | Yes |  | Yes |  |  |  |  |  |
| [Grok Bot](/setup/grok-bot/) |  | Yes |  |  |  | Yes | Yes |  |  |  |  |  |
| [Muse](/setup/muse/) |  |  |  |  |  |  | Yes |  |  |  |  |  |
| [Antigravity](/setup/antigravity/) |  | Yes | Yes |  | Yes |  | Yes |  | Yes |  |  |  |
| [Cursor](/setup/cursor/) |  | Yes | Yes |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Raycast](/setup/raycast/) |  |  |  |  | Yes |  | Yes |  |  |  |  |  |
| [Any MCP client](/setup/any-mcp/) |  |  |  | Yes | Yes |  | Yes |  |  |  |  |  |
| [Claude Desktop](/setup/claude-desktop/) | Yes |  | Yes |  |  |  | Yes |  |  | Yes |  |  |
| [Claude](/setup/claude-app/) | Yes |  | Yes |  |  |  | Yes |  |  |  |  |  |
| [Claude Cowork](/setup/claude-cowork/) | Yes |  | Yes |  |  |  | Yes |  |  |  |  |  |
| [ChatGPT Work](/setup/chatgpt-work/) |  | Yes |  |  |  |  | Yes |  |  |  |  |  |
| [Codex](/setup/codex/) |  | Yes | Yes | Yes | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [dots and ChatGPT Space](/setup/chatgpt-space/) |  | Yes |  |  |  |  | Yes |  |  |  |  |  |
| [Windsurf](/setup/windsurf/) |  |  | Yes |  | Yes |  | Yes |  |  |  |  |  |
| [VS Code](/setup/vscode/) |  |  | Yes |  | Yes |  | Yes | Yes | Yes |  | Yes | Yes |
| [GitHub Copilot CLI](/setup/github-copilot/) |  |  | Yes |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [GitHub Copilot app](/setup/github-copilot-app/) |  |  | Yes |  | Yes |  | Yes |  |  |  |  |  |
| [OpenCode](/setup/opencode/) |  |  |  | Yes | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Zed](/setup/zed/) |  |  |  | Yes | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Devin Desktop](/setup/devin-desktop/) |  |  | Yes |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Devin Cloud](/setup/devin-cloud/) |  |  |  |  | Yes |  | Yes |  | Yes |  |  |  |
| [Grok Build](/setup/grok-build/) |  |  |  |  | Yes |  |  |  |  |  |  |  |
| [OpenClaw](/setup/openclaw/) |  |  |  | Yes |  |  | Yes | Yes |  |  |  | Yes |
| [Hermes](/setup/hermes/) |  |  |  | Yes |  |  | Yes | Yes |  |  |  | Yes |
| [Pi](/setup/pi/) |  |  |  | Yes |  |  | Yes | Yes | Yes |  |  | Yes |
| [Conductor](/setup/conductor/) |  |  |  | Yes |  |  | Yes |  |  |  |  |  |
| [Instinct](/setup/instinct/) |  |  |  |  |  |  | Yes |  |  |  |  |  |
| [Perplexity](/setup/perplexity/) |  |  |  |  | Yes |  | Yes |  |  |  |  |  |
| [Microsoft Copilot](/setup/microsoft-copilot/) |  |  |  |  |  |  | Yes |  |  |  |  |  |
| [T3 Chat](/setup/t3-chat/) |  |  |  |  |  |  | Yes |  |  |  |  |  |
| [Amp](/setup/amp/) |  |  |  |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Warp](/setup/warp/) |  |  |  |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Factory Droid](/setup/factory-droid/) |  |  | Yes |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Cline](/setup/cline/) |  |  |  |  | Yes |  | Yes | Yes | Yes |  |  | Yes |
| [Indent](/setup/indent/) |  |  |  |  | Yes |  | Yes |  |  |  |  |  |
| [Poke](/setup/poke/) |  |  |  |  | Yes |  | Yes |  |  |  |  |  |
| [Grok](/setup/grok/) |  |  |  |  | Yes |  |  |  |  |  |  |  |

## Plan limits

What works on which plan, from each vendor's own pages.

| Agent | Plan | Limit |
| --- | --- | --- |
| [ChatGPT](/setup/chatgpt/) | Free, Go, Plus and Pro | The Spacefast plugin installs on every personal plan. [Source](https://chatgpt.com/pricing) |
| [ChatGPT](/setup/chatgpt/) | Business and Enterprise | Plugins are on by default on Business. On Enterprise an admin turns them on first. [Source](https://chatgpt.com/features/plugins/) |
| [ChatGPT](/setup/chatgpt/) | Free and Go | No developer mode, so you can't add Spacefast as a custom MCP server. Use the plugin. [Source](https://chatgpt.com/pricing) |
| [Grok Bot](/setup/grok-bot/) | Premium, Super and Ultra | Grok Bot comes with these plans. Plus and Free don't include it. [Source](https://docs.x.ai/x-subscription/grok-bot) |
| [Grok Bot](/setup/grok-bot/) | Team bots | An admin's MCP policy can block the server, and then it can't be saved. [Source](https://docs.x.ai/grok-bot/computer-and-apps) |
| [Raycast](/setup/raycast/) | Free | No AI and no MCP servers. Raycast AI and MCP need Pro, Teams Pro or Enterprise. [Source](https://www.raycast.com/pricing) |
| [Claude Desktop](/setup/claude-desktop/) | All plans | Directory connectors work on every plan. On Team and Enterprise, an owner has to turn them on first. [Source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) |
| [Claude Desktop](/setup/claude-desktop/) | Free | One custom connector at most, and no plugins. [Source](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) |
| [Claude Desktop](/setup/claude-desktop/) | Pro, Max, Ultra, Team and Enterprise | Plugins work. A plugin's local MCP server runs in Claude Code and in Cowork on your computer, not in chat. [Source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude) |
| [Claude](/setup/claude-app/) | All plans | Directory connectors work on every plan. On Team and Enterprise, an owner has to turn them on first. [Source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) |
| [Claude](/setup/claude-app/) | Free | One custom connector at most, and no plugins. [Source](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp) |
| [Claude](/setup/claude-app/) | Pro, Max, Ultra, Team and Enterprise | Plugins work. A plugin's local MCP server runs in Claude Code and in Cowork on your computer, not in chat. [Source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude) |
| [Claude Cowork](/setup/claude-cowork/) | Free | Cowork isn't available on the Free plan. [Source](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork) |
| [Claude Cowork](/setup/claude-cowork/) | Pro, Max and Ultra | New Cowork tasks run in the cloud, where a plugin's local MCP server doesn't run. The connector works there. [Source](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile) |
| [Claude Cowork](/setup/claude-cowork/) | Team and Enterprise | An owner has to turn on connectors, and may limit which plugin marketplaces you can add. [Source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities) |
| [ChatGPT Work](/setup/chatgpt-work/) | Free and Go | ChatGPT Work is limited and runs in the desktop app only. [Source](https://chatgpt.com/pricing) |
| [ChatGPT Work](/setup/chatgpt-work/) | Plus and Pro | ChatGPT Work runs on the desktop, the web and mobile. [Source](https://chatgpt.com/pricing) |
| [ChatGPT Work](/setup/chatgpt-work/) | Free, Go, Plus and Pro | The Spacefast plugin installs on every personal plan. [Source](https://chatgpt.com/pricing) |
| [ChatGPT Work](/setup/chatgpt-work/) | Business and Enterprise | Plugins are on by default on Business. On Enterprise an admin turns them on first. [Source](https://chatgpt.com/features/plugins/) |
| [Codex](/setup/codex/) | ChatGPT Free and Go | Codex works in the desktop app only, with limited use. [Source](https://learn.chatgpt.com/docs/pricing) |
| [Codex](/setup/codex/) | ChatGPT Plus and above | Codex works on the web, in the CLI, in the IDE extension and on iOS. [Source](https://learn.chatgpt.com/docs/pricing) |
| [dots and ChatGPT Space](/setup/chatgpt-space/) | Free, Go and Plus | dots and ChatGPT Space aren't included. [Source](https://chatgpt.com/pricing) |
| [dots and ChatGPT Space](/setup/chatgpt-space/) | Pro, Business Premium and Enterprise | dots are included. On Pro they need you to be 18 or older and outside the EEA, the UK and Switzerland. [Source](https://learn.chatgpt.com/docs/dots.md) |
| [Perplexity](/setup/perplexity/) | Free | Custom connectors aren't included. [Source](https://www.perplexity.ai/changelog/what-we-shipped---march-13-2026) |
| [Perplexity](/setup/perplexity/) | Pro, Max and Enterprise | Custom connectors work. On Enterprise, an admin has to allow members to add them. [Source](https://www.perplexity.ai/help-center/en/articles/13915507-adding-custom-remote-connectors) |
| [Microsoft Copilot](/setup/microsoft-copilot/) | Personal accounts | Copilot connects only to OneDrive, Outlook.com, Google Drive and Gmail. It has no custom connectors or MCP. [Source](https://support.microsoft.com/en-us/microsoft-copilot/connecting-microsoft-copilot-to-other-services) |
| [T3 Chat](/setup/t3-chat/) | All plans | T3 Chat has no MCP, connectors, plugins or skills. [Source](https://t3.chat/faq) |

## No longer supported

- [Gemini CLI](/setup/gemini-cli/): use [Antigravity](/setup/antigravity/) instead.
- [Continue](/setup/continue/): use [Cursor](/setup/cursor/) instead.
- [Roo Code](/setup/roo-code/): use [Cline](/setup/cline/) instead.
- [Jules](/setup/jules/): use [Antigravity](/setup/antigravity/) instead.
