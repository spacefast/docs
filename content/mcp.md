---
title: MCP
description: Connect an authenticated agent to Spacefast tools backed by the same public API.
---

The hosted MCP server gives agents typed Spacefast tools over streamable HTTP:

```text
https://mcp.spacefast.com
```

The client completes OAuth and the server scopes tools to the signed-in user.
Use hosted MCP for browser and cloud agents. On-device MCP is the better fit
when an agent must read and publish a bounded local checkout.

## Set up a specific agent

The consumer setup flow owns client-specific instructions, plugins, and skills:
[choose your agent](https://spacefast.com/setup). This page owns the technical
MCP contract.

## What the tools operate

MCP exposes the same spaces, versions, builds, access, domains, and collaboration
capabilities as the public API. It does not create a second data model.
Machine-readable discovery is available from the MCP server card on the main
Spacefast origin.

Never paste API keys or claim tokens into prompts. Let the client complete OAuth
or keep local credentials in the supported Spacefast state files.
