---
title: "@spacefast/mcp"
description: "Release history for @spacefast/mcp on npm."
---

Published as [`@spacefast/mcp`](https://www.npmjs.com/package/@spacefast/mcp) on npm.

## 0.8.1

#### Patch Changes

- Domain prices in MCP results are now the registrar's quote as is. Spacefast no longer adds its own 20¢ ICANN fee on top of generic TLDs.
- `search_connector_tools` takes an optional `team` on search, execute, and resume, so a login that can act for more than one team can use its connected services. The tool sends it as the Connectors API's `team` query, and the API still decides access. A paused run's resume prompt includes the same team.
- On-Device MCP publishes a local folder on macOS again. Operation tools whose request body has no required fields now accept a call without `body`, and tools with a JSON body no longer offer a `contentType` input for form encodings of the same body.
- Spacefast MCP now serves one tool per API operation, named by its operation ID, on every connection. Code mode is gone: the `?codemode=` server URL parameter, the `spacefast://skills/execute` guide, and the hidden `sf mcp --mode` flag are removed, and the `search` and `execute` tools run nothing. A client that cached them gets a message to refresh its tool list and call operation tools instead of a "tool not found" error. Read `spacefast://skills/api` for the calling guide.
- MCP keeps serving when Sell availability cannot be read: it lists Sell tools from the credential's last answer, or hides them until a read succeeds, instead of failing initialize and every tool list.
- Domain search and registration now cover 377 TLDs, up from 29. Names on extensions like `.band`, `.club` or `.cool` get a live price and can be bought instead of showing as unavailable. `.io` and `.ai` are no longer offered for new registrations.
- The Spacefast CLI and `@spacefast/mcp` now declare Node.js 22.19.0 or newer. Their dependencies already required it, so installing on Node 20 printed a wall of `EBADENGINE` warnings while the packages claimed to support it.
- @spacefast/builders@0.8.1
  - @spacefast/common@0.8.1
  - @spacefast/routing@0.8.1
  - @spacefast/sdk@0.8.1
  - @spacefast/zero@0.8.1
  - @spacefast/zero-compile@0.8.1

## 0.8.0

#### Minor Changes

- MCP now exposes one Cloudflare-style code-mode surface: `search` finds and describes Spacefast API operations without calling them, and `execute` calls them, alongside `resume_execution`, `publish`, and the MCP Apps. Simple and full modes, `SPACEFAST_MCP_MODE`, and the per-operation tools are removed. `sf mcp` and `sf mcp proxy` accept and ignore `--mode`, so agent configs written by CLI 0.7.0 keep starting. The connector gateway (`search_connector_tools`) is removed from hosted MCP, and hosted OAuth no longer grants connector scopes. On-Device MCP served by the CLI (`sf mcp` and the Claude Desktop extension) keeps the gateway and runs it on the CLI login; `sf mcp proxy` relays hosted MCP, so it does not. The hosted server ignores a `mode` query parameter, so hosted MCP URLs saved with `?mode=full` keep working when clients connect to them directly. Dashboard-only operations stay out of the agent catalog: domain purchases, registration details, owner contacts, plan codes, and the generic WordPress REST and WP-CLI passthroughs. The dashboard, the CLI, and the API keep them, and the Domains App hands registration and payment to the dashboard.

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.8.0
  - @spacefast/builders@0.8.0
  - @spacefast/routing@0.8.0
  - @spacefast/sdk@0.8.0
  - @spacefast/zero@0.8.0
  - @spacefast/zero-compile@0.8.0

## 0.7.0

#### Minor Changes

- Give agents the same domain-search conversation as the dashboard through `POST /v1/domains/search`, the SDK's `searchDomains`, and MCP's `spacefast.org.session.domains.searchDomains`.

  `sf domains search` now uses the hosted conversation by default. Pass a saved receipt with `--input` to continue it, refine the brief, or apply likes, dislikes, and selections. Use `--local` for offline suggestions.

  Responses retain the full session, stable suggestion IDs, feedback, availability provenance, ranking, and fee-inclusive display prices. If generation reaches its time budget, resume the returned session to finish the same turn. MCP callers should save the full structured result for continuation.

- Make simple mode the default for hosted MCP and `sf mcp`. Simple mode exposes individual first-party operations and disables the connected-service gateway. Use `?mode=full` for hosted connections or `sf mcp --mode full` to keep code execution and connected-service tools. Native plugin connections now select full mode explicitly, and skills, prompts, and Apps follow the selected mode.
- Simple mode now advertises only operations an agent can call, each with its own description. Operations that need a browser session, the CLI's device login, or a visitor's Frame or comment session are no longer MCP tools in either mode. Domain purchases, renewals, owner details, and plan codes continue in the Spacefast dashboard from simple mode, and the generic WordPress REST and WP-CLI passthroughs stay in full mode. The Domains App searches and hands selected names to the dashboard in simple mode.

  `getBootstrap` is now `getAccount`, `createSpaceZeroToken` is now `createSpaceRestApiToken`, and the MCP comments link helper `writeSpaceComment` is now `getSpaceCommentsLink`. Request paths are unchanged.

#### Patch Changes

- New Spacefast logo: a star followed by lowercase "spacefast", upright, in one color. `SPACEFAST_WORDMARK_PATH` and `SPACEFAST_WORDMARK_VIEW_BOX` now draw it on a tight `0 0 127 20` viewBox. The star on its own is the new mark: `SPACEFAST_MARK_PATH` on `SPACEFAST_MARK_VIEW_BOX` (`0 0 24 24`) replaces the `SPACEFAST_ICON_*` "SF" letter geometry, which is removed. `SPACEFAST_BRAND_COLORS` drops the lime `shadow`. The full-bleed icon export moves from `brand-assets/spacefast-sf-full-bleed.svg` to `brand-assets/spacefast-icon.svg`. The MCP Space library's sidebar icon is now the star.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/sdk@0.7.0
  - @spacefast/common@0.7.0
  - @spacefast/zero@0.7.0
  - @spacefast/zero-compile@0.7.0
  - @spacefast/builders@0.7.0
  - @spacefast/routing@0.7.0

## 0.6.1

#### Patch Changes

- `spacefast.org.session.domains.searchDomains` now runs one AI generation batch for a descriptive first brief, matching the dashboard and CLI. It requests up to 12 AI names instead of the previous initial and automatic enrichment batches totaling about 24. Follow-up turns grow the generated pool toward 24 available names; liked and selected names stay protected. Keyword exact matches are unchanged.
- Updated dependencies
  - @spacefast/common@0.6.1
  - @spacefast/builders@0.6.1
  - @spacefast/routing@0.6.1
  - @spacefast/sdk@0.6.1
  - @spacefast/zero@0.6.1
  - @spacefast/zero-compile@0.6.1

## 0.6.0

#### Minor Changes

- Add ChatGPT plugin entrypoints, a Space Library, an HTML file editor, local file opening, composer mentions, context attachments, chat actions, rich Space selection with previews, native settings, onboarding, and durable MCP event subscriptions. Add searchable Space lists and account-bound plugin preferences. Package the same plugin for local desktop testing.
- Show the Space Library as a grid of page previews on wide panes; narrow panes keep the list. An opened Space shows when it went live, its runtime, and its source, plus Next steps that send a ready prompt to the chat: review it visually, make a change, use your own domain, open the WordPress admin, share it, and show deployments or traffic.

#### Patch Changes

- Agents now ask once whether to send feedback to Spacefast when a task ends after an error, retry, workaround, or other friction. A yes covers later friction in the same conversation; a no stops the question. The MCP server instructions carry the same rule as the skills and setup document.
- Clear removed host presentation settings in ChatGPT Apps. Save MCP delivery with build, deployment, and domain lifecycle transitions. Search file-owned Space names and preserve existing webhook URL behavior.
- Ask your agent for an admin panel, dashboard, or CMS to manage a Space's content, and it opens the Space's WordPress dashboard for you instead of building one. The agent creates a one-use sign-in link with `createSpaceContentAdminLink`: no password, expires in 10 minutes, signs you in as the Space's administrator or editor. If your page is plain static files, the agent offers to move it to Zero: your posts go into the dashboard, the page lists them live, and dashboard edits land back in the Space's source and deploy. Nothing moves until you say yes.
- Return the Spacefast API's own error when `execute` gets a 401 or 403, instead of a generic "re-authenticate the connection" failure that pointed agents at `executor.coreTools.*` tools the MCP never provides.
- Add a Recover button to MCP App errors with the saved execution and result details. Preserve error reasons, validate publish manifests before approval, and distinguish new Spaces from updates in approval cards.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.6.0
  - @spacefast/sdk@0.6.0
  - @spacefast/zero@0.6.0
  - @spacefast/builders@0.6.0
  - @spacefast/routing@0.6.0
  - @spacefast/zero-compile@0.6.0

## 0.5.1

#### Patch Changes

- Clarify that hosted MCP publishing requires authentication and that anonymous publishing creates private bearer previews. Remove instructions that restrict the use of other services, and require Space ownership before serving share-preview images without an access credential.
- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.5.1
  - @spacefast/sdk@0.5.1
  - @spacefast/common@0.5.1
  - @spacefast/routing@0.5.1
  - @spacefast/zero@0.5.1

## 0.5.0

#### Minor Changes

- Agents see fewer, sharper MCP tools. Work mode, visual review feedback, page screenshots, and traffic rules now run inside `execute`, which also teaches agents to show screenshots as images. The build log view no longer reopens while a build runs, and the database view drops its console button: use `sf db console` or the dashboard. The prompt menu adds a tour, visual review, source browsing, and guided workflows for domains, sharing, rollbacks, and failed builds.
- Claim a hostname attached to another Space with a unique DNS TXT record, or move it directly when authorized to manage both Spaces. Expose ownership instructions and move status through the API and CLI, including `sf domains check --move`.

#### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0
  - @spacefast/routing@0.5.0
  - @spacefast/zero@0.5.0
  - @spacefast/sdk@0.5.0
  - @spacefast/zero-compile@0.5.0
- Fix CLI domain and storage lists and the MCP Space domains view to read the API response shapes returned by the shared transport.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.5.0
  - @spacefast/common@0.5.0
  - @spacefast/sdk@0.5.0
  - @spacefast/zero@0.5.0
  - @spacefast/routing@0.5.0

## 0.4.1

#### Patch Changes

- Updated dependencies
  - @spacefast/zero-compile@0.4.1
  - @spacefast/common@0.4.1
  - @spacefast/routing@0.4.1
  - @spacefast/sdk@0.4.1
  - @spacefast/zero@0.4.1

## 0.4.0

#### Minor Changes

- Add hosted MCP tools to import a Claude Design HTML bundle from its URL and check a pending import.

#### Patch Changes

- Declare explicit JSON types in MCP tool outputs to fix schema portability warnings while preserving scalar, array, object, and null execution results.
- Show contextual file diffs, source commits, and build details in approval cards. Preserve the reviewed action after a decision, bind each decision to its exact pause, and connect workspace files, staged changes, history, and build logs in MCP Apps.

  Allow the authenticated MCP proxy to use local development hosts under `.localhost` and the IPv6 loopback address.

- @spacefast/common@0.4.0
  - @spacefast/routing@0.4.0
  - @spacefast/sdk@0.4.0
  - @spacefast/zero@0.4.0
  - @spacefast/zero-compile@0.4.0

## 0.3.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.3.0
  - @spacefast/sdk@0.3.0
  - @spacefast/common@0.3.0
  - @spacefast/routing@0.3.0
  - @spacefast/zero@0.3.0

## 0.2.2

#### Patch Changes

- @spacefast/common@0.2.2
  - @spacefast/routing@0.2.2
  - @spacefast/sdk@0.2.2
  - @spacefast/zero@0.2.2
  - @spacefast/zero-compile@0.2.2

## 0.2.1

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/sdk@0.2.1
  - @spacefast/common@0.2.1
  - @spacefast/routing@0.2.1
  - @spacefast/zero@0.2.1
  - @spacefast/zero-compile@0.2.1

## 0.2.0

#### Patch Changes

- Consolidate the MCP docs surface into a single `search_docs` tool: a query that is exactly one page's slug or path now returns that page in full, replacing `get_page`.
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.2.0
  - @spacefast/routing@0.2.0
  - @spacefast/sdk@0.2.0
  - @spacefast/zero@0.2.0
  - @spacefast/zero-compile@0.2.0

## 0.1.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.1.0
  - @spacefast/sdk@0.1.0
  - @spacefast/routing@0.1.0
  - @spacefast/zero@0.1.0
  - @spacefast/zero-compile@0.1.0

## 0.0.27

#### Patch Changes

- Consolidate the MCP docs surface into a single `search_docs` tool: a query that is exactly one page's slug or path now returns that page in full, replacing `get_page`.
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.27
  - @spacefast/routing@0.0.27
  - @spacefast/sdk@0.0.27
  - @spacefast/zero@0.0.27
  - @spacefast/zero-compile@0.0.27

## 0.0.26

#### Patch Changes

- @spacefast/common@0.0.26
- @spacefast/routing@0.0.26
- @spacefast/sdk@0.0.26
- @spacefast/zero-compile@0.0.26

## 0.0.25

#### Patch Changes

- Updated dependencies
  - @spacefast/sdk@0.0.25
  - @spacefast/common@0.0.25
  - @spacefast/routing@0.0.25
  - @spacefast/zero-compile@0.0.25

## 0.0.24

#### Patch Changes

- @spacefast/common@0.0.24
- @spacefast/routing@0.0.24
- @spacefast/sdk@0.0.24
- @spacefast/zero-compile@0.0.24

## 0.0.23

#### Patch Changes

- Pin the Effect Node runtime companion in published installs so strict npm dependency resolution succeeds.
  - @spacefast/common@0.0.23
  - @spacefast/sdk@0.0.23

## 0.0.22

#### Patch Changes

- Ship every hosted MCP import as a runtime dependency so production-only installs can start.
  - @spacefast/common@0.0.22
  - @spacefast/sdk@0.0.22

## 0.0.21

#### Patch Changes

- @spacefast/common@0.0.21

## 0.0.20

#### Patch Changes

- @spacefast/common@0.0.20
- @spacefast/sdk@0.0.20

## 0.0.19

#### Patch Changes

- @spacefast/common@0.0.19
- @spacefast/sdk@0.0.19

## 0.0.18

#### Patch Changes

- Give the clean release declaration build enough heap to complete before npm publication.
- Updated dependencies
  - @spacefast/common@0.0.18
  - @spacefast/sdk@0.0.18

## 0.0.17

#### Patch Changes

- @spacefast/common@0.0.17
- @spacefast/sdk@0.0.17

## 0.0.16

#### Patch Changes

- @spacefast/common@0.0.16
- @spacefast/sdk@0.0.16

## 0.0.15

#### Patch Changes

- @spacefast/common@0.0.15
- @spacefast/sdk@0.0.15

## 0.0.14

#### Patch Changes

- Keep MCP discovery, code-mode guidance, and demo receipts consistently branded as Spacefast.
- Wait for durable hosted MCP session closure before acknowledging DELETE requests.
- Replace Spacefast's custom code execution, durable run, and approval stack with a sandboxed QuickJS runtime and an OpenAPI-generated tool surface. Mutating calls now pause and resume through elicitation; legacy execution and approval APIs are removed.
- Make hosted MCP execution deadlines abort in-flight work, report shell failures, recover expired replay checkpoints, and expose durable execution polling.
- Add Railway-style agent setup with repeated client targeting, optional project-scoped skills, integrated auth health, safe install/update/removal, popular agent consumers, local/remote-proxy/remote-OAuth connection methods, and direct variable, domain, and repository MCP lifecycle tools.
- Add the Spacefast-native code-mode workflow, emitted files, and current approval-resume semantics.
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.14
  - @spacefast/sdk@0.0.14

## 0.0.13

- Various bug fixes and improvements.

## 0.0.12

- Various bug fixes and improvements.

## 0.0.11

- Various bug fixes and improvements.

## 0.0.10

- Various bug fixes and improvements.

## 0.0.9

- Simpler install guides for the agent plugins.

## 0.0.8

- Deploys now finish as soon as your update is live.

## 0.0.7

- Removed the deprecated `search` tool. Use `search_docs` instead.
- Unknown tool presets now return a clear error.

## 0.0.6

- Various bug fixes and improvements.
