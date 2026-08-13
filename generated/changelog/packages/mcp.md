---
title: "@spacefast/mcp"
description: "Release history for @spacefast/mcp on npm."
---

Published as [`@spacefast/mcp`](https://www.npmjs.com/package/@spacefast/mcp) on npm.

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
- Replace Spacefast's custom code execution, durable run, and approval stack with Executor's QuickJS runtime and OpenAPI-generated tool surface. Mutating calls now pause and resume through Executor elicitation; legacy execution and approval APIs are removed.
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

- Removed the deprecated `search` tool — use `search_docs` instead.
- Unknown tool presets now return a clear error.

## 0.0.6

- Various bug fixes and improvements.

