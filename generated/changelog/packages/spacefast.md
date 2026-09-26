---
title: "CLI (`spacefast`)"
description: "Release history for the Spacefast CLI on npm."
---

Published as [`spacefast`](https://www.npmjs.com/package/spacefast) on npm.

Install with `npm install -g spacefast`. Standalone binaries are also published on the [CLI releases](https://github.com/spacefast/cli/releases) page.

## 0.5.0

#### Minor Changes

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
