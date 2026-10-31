---
title: "Connect GitHub Copilot app to Spacefast"
description: "Add Spacefast to the GitHub Copilot app so its agents can publish what you build."
seo:
  canonical: "https://spacefast.com/docs/setup/github-copilot-app/"
---

Add Spacefast to the GitHub Copilot app so its agents can publish what you build.

**[Add to GitHub Copilot app](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fmcp%2Finstall%3F%257B%2522name%2522%253A%2522spacefast%2522%252C%2522type%2522%253A%2522http%2522%252C%2522url%2522%253A%2522https%253A%252F%252Fmcp.spacefast.com%2522%257D)**

1. In the app, choose Allow, then Add server.
2. Sign in to Spacefast and approve access when asked.

If nothing happens, add the endpoint in GitHub Copilot app yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Install the Spacefast plugin.** Adds Spacefast with its skills. The app and Copilot CLI share plugins, so both get it.

```bash
npx -y plugins add spacefast/plugins -t github-copilot -y
```

1. Or, in the app, open Customize → Installed → Add plugin → Manage marketplaces, add `spacefast/plugins`, then install Spacefast from Browse all plugins.
2. Sign in to Spacefast and approve access when asked.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [GitHub Copilot app documentation](https://docs.github.com/en/copilot/how-tos/github-copilot-app/customize-github-copilot-app)
