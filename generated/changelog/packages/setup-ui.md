---
title: "@spacefast/setup-ui"
description: "Release history for @spacefast/setup-ui on npm."
---

Published as [`@spacefast/setup-ui`](https://www.npmjs.com/package/@spacefast/setup-ui) on npm.

## 0.10.0

#### Minor Changes

- The agent registry is now the one agent catalog. `AGENT_IDS` is the order every surface lists agents in, and `agentsForSurface()` says which agents a surface shows (`featured`, `dashboard-start`, `docs`, `cli`). `CONNECTION_METHODS` names every way to connect, each with a docs page at `connectionDocsUrl()`, and every method carries its `connection`. Entries gain `limits` (plan limits with a source and checked date), `status`, and `deprecation`. `renderAgentManifest()` returns the whole catalog as JSON, and `@spacefast/common/contracts/agent-manifest` describes it for the public `GET /v1/agents`.

  New entries: Any MCP client, Claude Cowork, ChatGPT Work, dots and ChatGPT Space, Instinct, Perplexity, Microsoft Copilot, and T3 Chat. Gemini CLI, Continue, Windsurf, Roo Code, and Jules are deprecated: they keep their ids and pages, which point to a supported agent, and have no setup methods. Claude Code, Hermes, OpenClaw, and Pi lead with the stdio MCP server (`npx -y spacefast mcp`), Codex offers it next to the hosted server, and Grok Bot leads with a prompt link that asks the Bot to add the Spacefast connector.

  `tier` is removed from `AgentEntry` and from `@spacefast/setup-ui`'s `AgentSetupView`; use `isAgentOnSurface(id, "featured")`. `sf setup agent` no longer offers Gemini CLI or Continue.

#### Patch Changes

- The setup dock and the agent option now read "Ask your agent to set things up for you".

## 0.9.0

#### Patch Changes

- Muse joins the personal agents, set up with one copied prompt. Indent moves to the coding agents, and Pi shows its own logo.
- Name every feature short of general availability "Private Beta", on every surface. The Labs stage label no longer distinguishes public, private, or waitlisted previews, and a marketplace listing that is not live yet stays out of setup pages instead of showing as "Soon". A `SetupMethodCard` handed an unlisted method says "Not available yet".

## 0.8.1

_No noted changes in this release._

## 0.8.0

_No noted changes in this release._

## 0.7.0

_No noted changes in this release._

## 0.6.1

_No noted changes in this release._

## 0.6.0

_No noted changes in this release._

## 0.5.1

_No noted changes in this release._

## 0.5.0

_No noted changes in this release._

## 0.4.1

_No noted changes in this release._

## 0.4.0

_No noted changes in this release._

## 0.3.0

_No noted changes in this release._

## 0.2.2

_No noted changes in this release._

## 0.2.1

_No noted changes in this release._

## 0.2.0

_No noted changes in this release._

## 0.1.0

_No noted changes in this release._

## 0.0.27

#### Patch Changes

- Publish the pure, registry-driven agent setup renderer with namespaced CSS and adapter-only actions for dashboard, website, and docs consumers.
