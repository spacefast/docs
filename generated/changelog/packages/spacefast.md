---
title: "CLI (`spacefast`)"
description: "Release history for the Spacefast CLI on npm."
---

Published as [`spacefast`](https://www.npmjs.com/package/spacefast) on npm.

Install with `npm install -g spacefast`. Standalone binaries are also published on the [CLI releases](https://github.com/spacefast/cli/releases) page.

## 0.8.1

#### Patch Changes

- `--claim-token` (and `SPACEFAST_CLAIM_TOKEN`) accept the claim link or site door URL as well as the space key, and `--claim-token -` reads the key from standard input.
- On-Device MCP publishes a local folder on macOS again. Operation tools whose request body has no required fields now accept a call without `body`, and tools with a JSON body no longer offer a `contentType` input for form encodings of the same body.
- Spacefast MCP now serves one tool per API operation, named by its operation ID, on every connection. Code mode is gone: the `?codemode=` server URL parameter, the `spacefast://skills/execute` guide, and the hidden `sf mcp --mode` flag are removed, and the `search` and `execute` tools run nothing. A client that cached them gets a message to refresh its tool list and call operation tools instead of a "tool not found" error. Read `spacefast://skills/api` for the calling guide.
- The Spacefast CLI and `@spacefast/mcp` now declare Node.js 22.19.0 or newer. Their dependencies already required it, so installing on Node 20 printed a wall of `EBADENGINE` warnings while the packages claimed to support it.
- `sf api --output <file>` now writes binary downloads to the file. Before, it exited with an "unsettled top-level await" warning and left a hidden `.spacefast-*.tmp` file next to the target.
- When `sf publish`, `sf continue` or `sf spaces claim` saves an API key to `.spacefast/state.json` after a claim, the output now says so: the key id, its label when known, where it was saved, and how to revoke it. A team key from the claim exchange links to the team's API keys page in the dashboard; the CLI's own sign-in key names `sf api-keys revoke <id> --api-url <api>`. `--json` output carries the same details in a `credential` object. Before, `sf publish` swapped the space key for an API key without saying which key it was or how to revoke it.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.8.1
  - @spacefast/adapter-kit@0.8.1
  - @spacefast/build-output@0.8.1
  - @spacefast/builders@0.8.1
  - @spacefast/common@0.8.1
  - @spacefast/next-adapter@0.8.1
  - @spacefast/routing@0.8.1
  - @spacefast/sdk@0.8.1
  - @spacefast/zero@0.8.1
  - @spacefast/zero-compat-emdash@0.8.1
  - @spacefast/zero-compat-payloadcms@0.8.1
  - @spacefast/zero-compile@0.8.1

## 0.8.0

#### Minor Changes

- MCP now exposes one Cloudflare-style code-mode surface: `search` finds and describes Spacefast API operations without calling them, and `execute` calls them, alongside `resume_execution`, `publish`, and the MCP Apps. Simple and full modes, `SPACEFAST_MCP_MODE`, and the per-operation tools are removed. `sf mcp` and `sf mcp proxy` accept and ignore `--mode`, so agent configs written by CLI 0.7.0 keep starting. The connector gateway (`search_connector_tools`) is removed from hosted MCP, and hosted OAuth no longer grants connector scopes. On-Device MCP served by the CLI (`sf mcp` and the Claude Desktop extension) keeps the gateway and runs it on the CLI login; `sf mcp proxy` relays hosted MCP, so it does not. The hosted server ignores a `mode` query parameter, so hosted MCP URLs saved with `?mode=full` keep working when clients connect to them directly. Dashboard-only operations stay out of the agent catalog: domain purchases, registration details, owner contacts, plan codes, and the generic WordPress REST and WP-CLI passthroughs. The dashboard, the CLI, and the API keep them, and the Domains App hands registration and payment to the dashboard.

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.8.0
  - @spacefast/common@0.8.0
  - @spacefast/builders@0.8.0
  - @spacefast/routing@0.8.0
  - @spacefast/sdk@0.8.0
  - @spacefast/zero@0.8.0
  - @spacefast/zero-compat-emdash@0.8.0
  - @spacefast/zero-compat-payloadcms@0.8.0
  - @spacefast/zero-compile@0.8.0
  - @spacefast/adapter-kit@0.8.0
  - @spacefast/next-adapter@0.8.0
  - @spacefast/build-output@0.8.0

## 0.7.0

#### Minor Changes

- Give agents the same domain-search conversation as the dashboard through `POST /v1/domains/search`, the SDK's `searchDomains`, and MCP's `spacefast.org.session.domains.searchDomains`.

  `sf domains search` now uses the hosted conversation by default. Pass a saved receipt with `--input` to continue it, refine the brief, or apply likes, dislikes, and selections. Use `--local` for offline suggestions.

  Responses retain the full session, stable suggestion IDs, feedback, availability provenance, ranking, and fee-inclusive display prices. If generation reaches its time budget, resume the returned session to finish the same turn. MCP callers should save the full structured result for continuation.

- Comments are available to every team. `sf comments` gains `create`, `react`, `unreact`, `mark-read`, `resolve` and `reopen`, `list --unread`, `--author` and `--search` filters, and `--mention` on create and reply; `archive` and `unarchive` are replaced by `resolve` and `reopen`. Human CLI errors list every validation problem. The in-page overlay keeps its composer next to what you're commenting on, renders safe Markdown, sends page anchors for page comments, and adds an `@` mention picker. MCP guidance maps every comment verb to its API operation.
- Make simple mode the default for hosted MCP and `sf mcp`. Simple mode exposes individual first-party operations and disables the connected-service gateway. Use `?mode=full` for hosted connections or `sf mcp --mode full` to keep code execution and connected-service tools. Native plugin connections now select full mode explicitly, and skills, prompts, and Apps follow the selected mode.
- Simple mode now advertises only operations an agent can call, each with its own description. Operations that need a browser session, the CLI's device login, or a visitor's Frame or comment session are no longer MCP tools in either mode. Domain purchases, renewals, owner details, and plan codes continue in the Spacefast dashboard from simple mode, and the generic WordPress REST and WP-CLI passthroughs stay in full mode. The Domains App searches and hands selected names to the dashboard in simple mode.

  `getBootstrap` is now `getAccount`, `createSpaceZeroToken` is now `createSpaceRestApiToken`, and the MCP comments link helper `writeSpaceComment` is now `getSpaceCommentsLink`. Request paths are unchanged.

- Add a context starter: one Space is one Gutenberg document, with Save at the top
  right and the Space's existing access settings controlling viewing and editing.
  WordPress stores blocks and native revisions. A lossless `.blocks` source binding
  uses the existing source writeback pipeline so committed content can travel with
  source remixes. Markdown remains available for supported agent handoffs. Revision
  tokens protect human edits from stale saves.

#### Patch Changes

- Build logs no longer mark what a build command prints to stderr as an error. A failed build is still reported by its exit status, with the failed command's output as the detail.
- Keep existing website content and runtime declarations when publishing configuration only. Configuration-only publishes stage the evaluated configuration without scanning local content and use the server's retaining version lifecycle.
- Return a friendly validation error with command guidance for unknown commands, without interactive prompts or framework warnings. Add `sf git list` as an alias for `sf git ls`.
- A rollback or promotion that needs approval now says to run the same command again with `--continuation-token` once it is approved.
- `sf setup agent` and `sf mcp install` now write VS Code's MCP config to its user-level `mcp.json` instead of creating `.vscode/mcp.json` in the current project. Pass `--project` to `sf setup agent` to write `.vscode/mcp.json` in the project as before. From a VS Code remote terminal (Dev Containers, Codespaces, SSH, WSL) setup still writes `.vscode/mcp.json`, because VS Code only runs a server on the remote from workspace or remote config.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.7.0
  - @spacefast/sdk@0.7.0
  - @spacefast/common@0.7.0
  - @spacefast/zero@0.7.0
  - @spacefast/zero-compile@0.7.0
  - @spacefast/builders@0.7.0
  - @spacefast/routing@0.7.0
  - @spacefast/zero-compat-emdash@0.7.0
  - @spacefast/zero-compat-payloadcms@0.7.0
  - @spacefast/adapter-kit@0.7.0
  - @spacefast/next-adapter@0.7.0
  - @spacefast/build-output@0.7.0

## 0.6.1

#### Patch Changes

- Align `sf domains search` with the dashboard in normal and interactive modes. Search uses live keyword matches, Luna typing previews, Sol submissions and refinements, fee-inclusive quotes, and Jev ranking. Saved sessions preserve feedback and selections, and interrupted searches remain resumable.
- Each submitted descriptive brief runs one AI generation batch of up to 12 new names; typing previews may already have added names. API and MCP first turns now request one batch instead of the previous two batches totaling about 24. Follow-up turns grow the generated pool toward 24 available names; liked and selected names stay protected. Keyword exact matches are unchanged.
- Updated dependencies
  - @spacefast/common@0.6.1
  - @spacefast/builders@0.6.1
  - @spacefast/mcp@0.6.1
  - @spacefast/routing@0.6.1
  - @spacefast/sdk@0.6.1
  - @spacefast/zero@0.6.1
  - @spacefast/zero-compat-emdash@0.6.1
  - @spacefast/zero-compat-payloadcms@0.6.1
  - @spacefast/zero-compile@0.6.1
  - @spacefast/adapter-kit@0.6.1
  - @spacefast/next-adapter@0.6.1
  - @spacefast/build-output@0.6.1

## 0.6.0

#### Minor Changes

- Projects can use `spacefast.config.ts`, with `defineConfig` and types from `spacefast/config`. `sf init` writes this format. Existing `sf.jsonc` projects remain supported; an explicit `--config` selection wins, otherwise `spacefast.config.ts` takes precedence when both files exist. Use only one project configuration file to avoid maintaining two different configurations.
- Add ChatGPT plugin entrypoints, a Space Library, an HTML file editor, local file opening, composer mentions, context attachments, chat actions, rich Space selection with previews, native settings, onboarding, and durable MCP event subscriptions. Add searchable Space lists and account-bound plugin preferences. Package the same plugin for local desktop testing.
- Read back the feedback you sent. `sf feedback list` shows your recent feedback, newest first, and `sf feedback get <ref>` shows one entry by the reference `sf feedback` returned. Both need you signed in as yourself (`sf login` or a dashboard session) and only return feedback you sent; Space keys and team, OAuth-client or partner keys get a 403. The API equivalents are `GET /v1/feedback` and `GET /v1/feedback/{ref}`.
- Add `sf migrate <url>` to capture public HTTPS websites through the existing publish API, with Build waiting, explicit idempotency-key recovery, and Open/Claim receipts. Each ordinary invocation starts a new migration.

#### Patch Changes

- Agents now ask once whether to send feedback to Spacefast when a task ends after an error, retry, workaround, or other friction. A yes covers later friction in the same conversation; a no stops the question. The MCP server instructions carry the same rule as the skills and setup document.
- Keep MCP setup runnable after transient npm installs by pinning its launcher to the current CLI version. Report broken Claude Code integrations as integration errors with recovery instructions.
- `sf setup agent` now works with symlinked user-level MCP configs, such as a `~/.codex/config.toml` kept in a dotfiles repository. Setup edits the file the link points to and leaves the link in place. A symlinked config inside the current repository (or the working directory outside one) is still refused, because a cloned repository can point that link anywhere.
- Clear removed host presentation settings in ChatGPT Apps. Save MCP delivery with build, deployment, and domain lifecycle transitions. Search file-owned Space names and preserve existing webhook URL behavior.
- Point the Claude Desktop extension's API key setting at the dashboard page where keys are created, instead of a page that no longer exists.
- Use publication config validation for routing inspection, explain missing databases, and preserve specific authentication refusal messages.
- Agents that arrive through a handoff link, and any API key a team member created, can now open a Space's content dashboard: the one-use sign-in link signs in the person who created the key. `sf content dashboard` opens the dashboard in your browser, or prints the sign-in link with `--show-secret --json` for an agent to hand you. The handoff document teaches both the CLI and the direct HTTP lane.
- Ask your agent for an admin panel, dashboard, or CMS to manage a Space's content, and it opens the Space's WordPress dashboard for you instead of building one. The agent creates a one-use sign-in link with `createSpaceContentAdminLink`: no password, expires in 10 minutes, signs you in as the Space's administrator or editor. If your page is plain static files, the agent offers to move it to Zero: your posts go into the dashboard, the page lists them live, and dashboard edits land back in the Space's source and deploy. Nothing moves until you say yes.
- Keep transient npm agent setup runnable after a Homebrew Node upgrade by persisting verified installation aliases for Node and npx.
- A permission refusal (`forbidden` and the connector role and policy refusals) no longer tells you to run `sf login`. Its `recovery` now says to ask a team owner or admin, because signing in again returns the same refusal.
- A build whose root directory does not exist now fails with `App root directory "travel" does not exist in the repository` instead of a raw `ENOENT … realpath` error with a sandbox path. When the name only differs by case, the error names the directory that exists (`did you mean "Travel"?`), since hosted builds run on a case-sensitive filesystem.
- Remote builds no longer pin detected build settings. `sf publish` sent the locally detected build command and output directory to the cloud build as explicit settings, which turned off automatic Next.js and TanStack Start output handling there, so a server-rendered Next.js app failed with "Build output directory does not exist: …/out". Settings you choose with flags or `sf.jsonc` are still sent.
- `sf setup agent --handoff` now says when sign-in already worked. If a setup step failed after the handoff link was redeemed, the error read like a failed sign-in, so retrying the spent link only returned "already used". The error now says the CLI is signed in and the link is used up, and its JSON details carry `handoff: { redeemed: true }`.
- List pending Space transfers with `sf transfers ls --team <team>` and inspect one with `sf transfers get <id>`. Transfer guidance now names receiving team owners and admins, explains credential visibility when a target team cannot be resolved, and distinguishes transfer authority from Space read/write access.
- Publish assets-only Wrangler projects that set `assets.not_found_handling`. `single-page-application` becomes the `/index.html` fallback in the generated `sf.jsonc`, with clean URLs kept on unless `assets.html_handling` is `none`; `404-page` and `none` keep Spacefast's default 404 handling. Workers with a `main` entry still report the setting as unsupported.
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
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.6.0
  - @spacefast/common@0.6.0
  - @spacefast/sdk@0.6.0
  - @spacefast/zero@0.6.0
  - @spacefast/builders@0.6.0
  - @spacefast/domain-search-terminal@0.6.0
  - @spacefast/routing@0.6.0
  - @spacefast/zero-compat-emdash@0.6.0
  - @spacefast/zero-compat-payloadcms@0.6.0
  - @spacefast/zero-compile@0.6.0
  - @spacefast/adapter-kit@0.6.0
  - @spacefast/next-adapter@0.6.0
  - @spacefast/build-output@0.6.0

## 0.5.1

#### Patch Changes

- Agents in hosted sandboxes that block Spacefast (Claude Code on the web and mobile, Codex cloud) now get a way forward instead of "run this from your laptop". The skills and `/setup.md` point them to the Claude connector link, GitHub push to deploy, and the exact domains to allow. In a Claude Code cloud session, `network_error` and `upload_transport_error` from the CLI carry the same guidance.
- The Cursor plugin marketplace manifest lists its owner by name only, as Cursor's marketplace schema requires, so the Spacefast plugins publish again.
- `sf git github installations` and `sf git github repos` now list by team (`--team`, defaulting to your default team) instead of by Space, so you can see a team's GitHub repositories before any Space exists. Repositories past GitHub's 1,000-repository listing limit stay visible instead of disappearing.
- Clarify that hosted MCP publishing requires authentication and that anonymous publishing creates private bearer previews. Remove instructions that restrict the use of other services, and require Space ownership before serving share-preview images without an access credential.
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.5.1
  - @spacefast/sdk@0.5.1
  - @spacefast/mcp@0.5.1
  - @spacefast/zero-compat-emdash@0.5.1
  - @spacefast/zero-compat-payloadcms@0.5.1
  - @spacefast/domain-search-terminal@0.5.1
  - @spacefast/adapter-kit@0.5.1
  - @spacefast/build-output@0.5.1
  - @spacefast/builders@0.5.1
  - @spacefast/common@0.5.1
  - @spacefast/next-adapter@0.5.1
  - @spacefast/routing@0.5.1
  - @spacefast/zero@0.5.1

## 0.5.0

#### Minor Changes

- Default new share links and password credentials to the viewer role. Pass `--role commenter` to grant commenting access. Show `status: "stored"` in `sf feedback --json` receipts.
- Every worker has a database and outbound fetch — nothing to declare.

  `sf.jsonc` no longer takes `runtime.database` or `runtime.fetch`; a stale key
  is warned about and ignored, not obeyed. A Functions worker always gets
  `env.DB`, and how far outbound `fetch` reaches is decided by the space: an
  unclaimed space reaches a trusted host list, a claimed one reaches any public
  host.

- `sf dev` runs actions and their fetches.

  A capsule's `actions` run locally over `action.run`, and `fetch()` inside any
  local handler goes through the isolate's host bridge instead of failing as
  undefined.

- Claim a hostname attached to another Space with a unique DNS TXT record, or move it directly when authorized to manage both Spaces. Expose ownership instructions and move status through the API and CLI, including `sf domains check --move`.
- A coding agent can sign the CLI in from its MCP session — no second login.

  The MCP server has a new `cli_login` tool. It returns a one-use link that
  `sf login --handoff` redeems over stdin, and the CLI gets the same access as the
  MCP connection: disconnect Spacefast and the CLI login stops too. The MCP
  guidance now tells agents that can run shell commands to publish local files
  with `sf publish`, which reads them from disk instead of sending every file
  through the conversation.

- Connect custom domains directly to a Space through WP Cloud, without team inventory or registration prerequisites. Domain removal deletes the Space attachment instead of retaining an unassigned serving record. Keep apex/www redirects in the existing routing engine without redirecting version or branch preview URLs.

  Keep domain registration and managed-DNS commands as separate, opt-in features. Their feature flags are disabled by default and do not affect Space custom-domain attachment.

  Custom-domain serving integrations must use `/v1/spaces/{spaceId}/domains` and its attachment endpoints. The optional registration and DNS APIs do not manage Space attachments.

- Add numeric and optional database fields, user references, indexed counts, application sign-in policies, and transactional guest upgrades to Zero. Query hooks now distinguish loading from empty or null results. Uploads are private by default, with explicit public sharing.

  Add local development identities, multiple isolated dev servers, query inspection, storage transfers, and retained Space archive and restore commands. Newly compiled apps require an engine that implements these contracts before publication.

#### Patch Changes

- When a detected `bun install --frozen-lockfile` fails because `bun.lock` no longer matches `package.json`, `sf build` and `sf publish` install from `package.json` with `bun install` and report a `build_install_lockfile_stale` warning instead of failing the build.
- Link the team's billing page when a plan limit that a paid plan raises blocks a command.
- Allow approved rollback and promotion requests to resume with their continuation token.
- Retry CLI update checks after registry failures and whenever the installed CLI version changes.
- `sf setup agent` no longer fails with `validation_error` when you keep the picker's default Universal (.agents) choice.
- Publish TanStack Start apps built with Nitro's `cloudflare-module` preset automatically: `.output/public` ships as files and the Nitro server runs as the site's worker with its Wrangler settings and D1 databases.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0
  - @spacefast/routing@0.5.0
  - @spacefast/zero@0.5.0
  - @spacefast/mcp@0.5.0
  - @spacefast/sdk@0.5.0
  - @spacefast/builders@0.5.0
  - @spacefast/domain-search-terminal@0.5.0
  - @spacefast/zero-compat-emdash@0.5.0
  - @spacefast/zero-compat-payloadcms@0.5.0
  - @spacefast/zero-compile@0.5.0
  - @spacefast/adapter-kit@0.5.0
  - @spacefast/next-adapter@0.5.0
  - @spacefast/build-output@0.5.0
- Build CLI commands as self-contained entry bundles with declared package dependencies resolved by Node. Keep the canonical WordPress block serializer private to the compiler so CLI installation does not inherit editor peer dependencies, and publish the browser API declarations.
- Fix CLI domain and storage lists and the MCP Space domains view to read the API response shapes returned by the shared transport.
- Framework builds and Zero compose in one project. `sf build` and `sf publish` run the framework build, compile the capsule from the project root, and publish the build output at `/` with the runtime beside it; a Zero project whose build script renders into the project root publishes the root. Sources, lockfiles, `tsconfig*.json`, TypeScript files, and `tools/` stay out of the published files. The `build` settings in `sf.jsonc` apply to local builds too, `sf publish --remote` takes the build lane when the project has a build, and a host project's `tsconfig.json` no longer rebinds the JSX runtime of Zero pages.

  Local Zero previews also accept source-backed Markdown and HTML documents. Their source preview escapes author markup instead of requiring compiled HTML or executing the source.

  Prebuilt publishes reuse compiled Zero and Functions metadata from the build archive's sidecar instead of recompiling sources removed during packaging. Invalid runtime metadata fails before upload.

- Ship native CLI executables with an immutable compiler dependency tree so build and dev work without a workspace or runtime dependency downloads. Verify each platform's release archive with real compilation, a local query and MCP worker execution.

  Use host filesystem paths when naming compiler platform assets so Windows builds emit valid portable asset names.

- Build Next.js 16 `proxy.ts` applications with the current OpenNext runtime adapter.
- Detect Worker entries and compatibility settings from Wrangler JSON, JSONC, and TOML configs. Preserve JSONC strings and trailing commas. Explain that D1 SQLite queries and migrations cannot use Spacefast's MySQL binding unchanged.
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
- Updated dependencies
  - @spacefast/zero-compile@0.5.0
  - @spacefast/common@0.5.0
  - @spacefast/sdk@0.5.0
  - @spacefast/mcp@0.5.0
  - @spacefast/zero@0.5.0
  - @spacefast/builders@0.5.0
  - @spacefast/zero-compat-emdash@0.5.0
  - @spacefast/zero-compat-payloadcms@0.5.0
  - @spacefast/domain-search-terminal@0.5.0
  - @spacefast/routing@0.5.0
  - @spacefast/next-adapter@0.5.0
  - @spacefast/build-output@0.5.0

## 0.4.1

#### Patch Changes

- Build CLI commands as self-contained entry bundles with declared package dependencies resolved by Node. Keep the canonical WordPress block serializer private to the compiler so CLI installation does not inherit editor peer dependencies, and publish the browser API declarations.
- Updated dependencies
  - @spacefast/zero-compile@0.4.1
  - @spacefast/common@0.4.1
  - @spacefast/mcp@0.4.1
  - @spacefast/zero-compat-emdash@0.4.1
  - @spacefast/zero-compat-payloadcms@0.4.1
  - @spacefast/domain-search-terminal@0.4.1
  - @spacefast/routing@0.4.1
  - @spacefast/sdk@0.4.1
  - @spacefast/zero@0.4.1
  - @spacefast/next-adapter@0.4.1
  - @spacefast/build-output@0.4.1

## 0.4.0

#### Patch Changes

- Show contextual file diffs, source commits, and build details in approval cards. Preserve the reviewed action after a decision, bind each decision to its exact pause, and connect workspace files, staged changes, history, and build logs in MCP Apps.

  Allow the authenticated MCP proxy to use local development hosts under `.localhost` and the IPv6 loopback address.

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.4.0
  - @spacefast/build-output@0.4.0
  - @spacefast/common@0.4.0
  - @spacefast/domain-search-terminal@0.4.0
  - @spacefast/next-adapter@0.4.0
  - @spacefast/routing@0.4.0
  - @spacefast/sdk@0.4.0
  - @spacefast/zero@0.4.0
  - @spacefast/zero-compat-emdash@0.4.0
  - @spacefast/zero-compat-payloadcms@0.4.0
  - @spacefast/zero-compile@0.4.0

## 0.3.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.3.0
  - @spacefast/sdk@0.3.0
  - @spacefast/zero-compat-payloadcms@0.3.0
  - @spacefast/zero-compat-emdash@0.3.0
  - @spacefast/mcp@0.3.0
  - @spacefast/domain-search-terminal@0.3.0
  - @spacefast/build-output@0.3.0
  - @spacefast/common@0.3.0
  - @spacefast/next-adapter@0.3.0
  - @spacefast/routing@0.3.0
  - @spacefast/zero@0.3.0

## 0.2.2

#### Patch Changes

- Republish the workspace through trusted publishing. v0.2.1's npm publication
  was interrupted by the first-publish bootstrap of @spacefast/content and
  @spacefast/setup-ui; both packages now exist with trusted publishing
  configured, so this release publishes every package from CI's reproducible
  build again.
- @spacefast/build-output@0.2.2
  - @spacefast/common@0.2.2
  - @spacefast/domain-search-terminal@0.2.2
  - @spacefast/mcp@0.2.2
  - @spacefast/next-adapter@0.2.2
  - @spacefast/routing@0.2.2
  - @spacefast/sdk@0.2.2
  - @spacefast/zero@0.2.2
  - @spacefast/zero-compile@0.2.2

## 0.2.1

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/sdk@0.2.1
  - @spacefast/domain-search-terminal@0.2.1
  - @spacefast/mcp@0.2.1
  - @spacefast/build-output@0.2.1
  - @spacefast/common@0.2.1
  - @spacefast/next-adapter@0.2.1
  - @spacefast/routing@0.2.1
  - @spacefast/zero@0.2.1
  - @spacefast/zero-compile@0.2.1

## 0.2.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.2.0
  - @spacefast/common@0.2.0
  - @spacefast/routing@0.2.0
  - @spacefast/domain-search-terminal@0.2.0
  - @spacefast/sdk@0.2.0
  - @spacefast/zero@0.2.0
  - @spacefast/zero-compile@0.2.0
  - @spacefast/next-adapter@0.2.0
  - @spacefast/build-output@0.2.0

## 0.1.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.1.0
  - @spacefast/sdk@0.1.0
  - @spacefast/domain-search-terminal@0.1.0
  - @spacefast/mcp@0.1.0
  - @spacefast/routing@0.1.0
  - @spacefast/zero@0.1.0
  - @spacefast/zero-compile@0.1.0
  - @spacefast/next-adapter@0.1.0
  - @spacefast/build-output@0.1.0

## 0.0.27

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.0.27
  - @spacefast/common@0.0.27
  - @spacefast/domain-search-terminal@0.0.27
  - @spacefast/routing@0.0.27
  - @spacefast/sdk@0.0.27
  - @spacefast/zero@0.0.27
  - @spacefast/zero-compile@0.0.27
  - @spacefast/next-adapter@0.0.27
  - @spacefast/build-output@0.0.27

## 0.0.26

#### Patch Changes

- Release the complete Spacefast package and plugin set through trusted publishing.
  - @spacefast/common@0.0.26
  - @spacefast/domain-search-terminal@0.0.26
  - @spacefast/mcp@0.0.26
  - @spacefast/routing@0.0.26
  - @spacefast/sdk@0.0.26
  - @spacefast/zero@0.0.26
  - @spacefast/zero-compile@0.0.26
  - @spacefast/build-output@0.0.26
  - @spacefast/next-adapter@0.0.26

## 0.0.25

#### Patch Changes

- Updated dependencies
  - @spacefast/sdk@0.0.25
  - @spacefast/domain-search-terminal@0.0.25
  - @spacefast/mcp@0.0.25
  - @spacefast/common@0.0.25
  - @spacefast/routing@0.0.25
  - @spacefast/zero@0.0.25
  - @spacefast/zero-compile@0.0.25
  - @spacefast/build-output@0.0.25
  - @spacefast/next-adapter@0.0.25

## 0.0.24

#### Patch Changes

- Sharpen the agent skill: trigger phrasings in the description, explicit
  side-effect-free probes vs mutations, the correct pre-success URL check, and
  a positioning line that reflects Zero and Functions instead of denying
  server code.
  - @spacefast/common@0.0.24
  - @spacefast/domain-search-terminal@0.0.24
  - @spacefast/mcp@0.0.24
  - @spacefast/routing@0.0.24
  - @spacefast/sdk@0.0.24
  - @spacefast/zero@0.0.24
  - @spacefast/zero-compile@0.0.24

## 0.0.23

#### Patch Changes

- Updated dependencies
  - @spacefast/mcp@0.0.23
  - @spacefast/common@0.0.23
  - @spacefast/domain-search-terminal@0.0.23
  - @spacefast/routing@0.0.23
  - @spacefast/zero@0.0.23

## 0.0.22

#### Patch Changes

- Make automatic Next.js builds work when the Spacefast CLI is launched through npx.
- Updated dependencies
  - @spacefast/mcp@0.0.22
  - @spacefast/common@0.0.22
  - @spacefast/domain-search-terminal@0.0.22
  - @spacefast/routing@0.0.22
  - @spacefast/zero@0.0.22

## 0.0.21

#### Patch Changes

- Run CommonJS Node built-ins in Functions bundles and dispatch framework root routes when no static index exists.
  - @spacefast/common@0.0.21
  - @spacefast/domain-search-terminal@0.0.21
  - @spacefast/mcp@0.0.21
  - @spacefast/routing@0.0.21
  - @spacefast/zero@0.0.21

## 0.0.20

#### Patch Changes

- Deploy ordinary Next.js applications through the Functions runtime without requiring project-specific configuration.
  - @spacefast/common@0.0.20
  - @spacefast/domain-search-terminal@0.0.20
  - @spacefast/mcp@0.0.20
  - @spacefast/routing@0.0.20
  - @spacefast/zero@0.0.20

## 0.0.19

#### Patch Changes

- Resolve Zero SDK imports through installed package exports in published CLI builds.
  - @spacefast/common@0.0.19
  - @spacefast/domain-search-terminal@0.0.19
  - @spacefast/mcp@0.0.19
  - @spacefast/routing@0.0.19
  - @spacefast/zero@0.0.19

## 0.0.18

#### Patch Changes

- Give the clean release declaration build enough heap to complete before npm publication.
- Updated dependencies
  - @spacefast/common@0.0.18
  - @spacefast/domain-search-terminal@0.0.18
  - @spacefast/mcp@0.0.18
  - @spacefast/routing@0.0.18
  - @spacefast/zero@0.0.18

## 0.0.17

#### Patch Changes

- Give clean npm release type generation enough heap to complete on CI runners.
  - @spacefast/common@0.0.17
  - @spacefast/domain-search-terminal@0.0.17
  - @spacefast/mcp@0.0.17
  - @spacefast/routing@0.0.17
  - @spacefast/zero@0.0.17

## 0.0.16

#### Patch Changes

- Build workspace type declarations before validating packages in clean npm release checkouts.
  - @spacefast/common@0.0.16
  - @spacefast/domain-search-terminal@0.0.16
  - @spacefast/mcp@0.0.16
  - @spacefast/routing@0.0.16
  - @spacefast/zero@0.0.16

## 0.0.15

#### Patch Changes

- Remove the hidden early-access SFTP commands and their install-time SSH dependencies from the CLI.
  - @spacefast/common@0.0.15
  - @spacefast/domain-search-terminal@0.0.15
  - @spacefast/mcp@0.0.15
  - @spacefast/routing@0.0.15
  - @spacefast/zero@0.0.15

## 0.0.14

#### Patch Changes

- Keep MCP discovery, code-mode guidance, and demo receipts consistently branded as Spacefast.
- Add complete Zero database exports plus owner storage listing and deletion across the CLI, API, SDK, and dashboard.
- List MCP daemon, HTTP, and status commands in canonical CLI help.
- Run Lakebed 0.0.29 core capsules without import rewrites through Spacefast Zero, including actions, runtime-backed object storage, declared indexes, and the database v1 query API.
- Make Zero generally available on every plan, including local development, hosted execution, and Cast-backed realtime updates.
- Add Railway-style agent setup with repeated client targeting, optional project-scoped skills, integrated auth health, safe install/update/removal, popular agent consumers, local/remote-proxy/remote-OAuth connection methods, and direct variable, domain, and repository MCP lifecycle tools.
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
  - @spacefast/mcp@0.0.14
  - @spacefast/zero@0.0.14
  - @spacefast/common@0.0.14
  - @spacefast/routing@0.0.14
  - @spacefast/domain-search-terminal@0.0.14

## 0.0.13

- Jekyll sites now build automatically.

## 0.0.12

- Various bug fixes and improvements.

## 0.0.11

- Fixed CLI release downloads.

## 0.0.10

- The CLI is now available as standalone binaries and an npm package.

## 0.0.9

- Simpler install guides for the agent plugins.

## 0.0.8

- Deploys now finish as soon as your update is live.

## 0.0.7

- Various bug fixes and improvements.

## 0.0.6

- Various bug fixes and improvements.
