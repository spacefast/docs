---
title: "CLI (`spacefast`)"
description: "Release history for the Spacefast CLI on npm."
---

Published as [`spacefast`](https://www.npmjs.com/package/spacefast) on npm.

Install with `npm install -g spacefast`. Standalone binaries are also published on the [CLI releases](https://github.com/spacefast/cli/releases) page.

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
- Make Zero generally available on eligible dedicated-runtime plans, including local development, hosted execution, and Cast-backed realtime updates.
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

