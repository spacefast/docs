---
title: "@spacefast/zero-compile"
description: "Release history for @spacefast/zero-compile on npm."
---

Published as [`@spacefast/zero-compile`](https://www.npmjs.com/package/@spacefast/zero-compile) on npm.

## 0.5.0

#### Minor Changes

- Add numeric and optional database fields, user references, indexed counts, application sign-in policies, and transactional guest upgrades to Zero. Query hooks now distinguish loading from empty or null results. Uploads are private by default, with explicit public sharing.

  Add local development identities, multiple isolated dev servers, query inspection, storage transfers, and retained Space archive and restore commands. Newly compiled apps require an engine that implements these contracts before publication.

#### Patch Changes

- Build CLI commands as self-contained entry bundles with declared package dependencies resolved by Node. Keep the canonical WordPress block serializer private to the compiler so CLI installation does not inherit editor peer dependencies, and publish the browser API declarations.
- Framework builds and Zero compose in one project. `sf build` and `sf publish` run the framework build, compile the capsule from the project root, and publish the build output at `/` with the runtime beside it; a Zero project whose build script renders into the project root publishes the root. Sources, lockfiles, `tsconfig*.json`, TypeScript files, and `tools/` stay out of the published files. The `build` settings in `sf.jsonc` apply to local builds too, `sf publish --remote` takes the build lane when the project has a build, and a host project's `tsconfig.json` no longer rebinds the JSX runtime of Zero pages.

  Local Zero previews also accept source-backed Markdown and HTML documents. Their source preview escapes author markup instead of requiring compiled HTML or executing the source.

  Prebuilt publishes reuse compiled Zero and Functions metadata from the build archive's sidecar instead of recompiling sources removed during packaging. Invalid runtime metadata fails before upload.

- Ship native CLI executables with an immutable compiler dependency tree so build and dev work without a workspace or runtime dependency downloads. Verify each platform's release archive with real compilation, a local query and MCP worker execution.

  Use host filesystem paths when naming compiler platform assets so Windows builds emit valid portable asset names.

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0
  - @spacefast/zero@0.5.0

## 0.4.1

#### Patch Changes

- Build CLI commands as self-contained entry bundles with declared package dependencies resolved by Node. Keep the canonical WordPress block serializer private to the compiler so CLI installation does not inherit editor peer dependencies, and publish the browser API declarations.
- Updated dependencies
  - @spacefast/common@0.4.1
  - @spacefast/zero@0.4.1

## 0.4.0

#### Patch Changes

- @spacefast/common@0.4.0
  - @spacefast/zero@0.4.0

## 0.3.0

#### Patch Changes

- Declare Zod as a runtime dependency so isolated production installs can load the content model compiler.
- @spacefast/common@0.3.0
  - @spacefast/zero@0.3.0

## 0.2.2

#### Patch Changes

- @spacefast/common@0.2.2
  - @spacefast/zero@0.2.2

## 0.2.1

#### Patch Changes

- @spacefast/common@0.2.1
  - @spacefast/zero@0.2.1

## 0.2.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.2.0
  - @spacefast/zero@0.2.0

## 0.1.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.1.0
  - @spacefast/zero@0.1.0

## 0.0.27

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.27
  - @spacefast/zero@0.0.27

## 0.0.26

#### Patch Changes

- @spacefast/common@0.0.26
- @spacefast/zero@0.0.26

## 0.0.25

#### Patch Changes

- @spacefast/common@0.0.25
- @spacefast/zero@0.0.25

## 0.0.24

#### Patch Changes

- @spacefast/common@0.0.24
- @spacefast/zero@0.0.24

## 0.0.23

_No noted changes in this release._
