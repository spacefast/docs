---
title: "@spacefast/routing"
description: "Release history for @spacefast/routing on npm."
---

Published as [`@spacefast/routing`](https://www.npmjs.com/package/@spacefast/routing) on npm.

## 0.3.0

#### Patch Changes

- @spacefast/common@0.3.0

## 0.2.2

#### Patch Changes

- @spacefast/common@0.2.2

## 0.2.1

#### Patch Changes

- @spacefast/common@0.2.1

## 0.2.0

#### Patch Changes

- Fold a run of root dots when normalizing a host, matching the Rust compiler. `normalize_hostname` and `parse_absolute_url` in `stattic-runtime-core` trim every trailing dot, while the TypeScript lane trimmed one in each — so a host carrying three of them compiled to a rule on one lane and a `redirect_hostname_unassigned` diagnostic on the other. The canonical normalizer now ships as `@spacefast/routing/hostname`, alongside `normalizeHostAuthority` for `Host`-header values that carry a port.
- Updated dependencies
  - @spacefast/common@0.2.0

## 0.1.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.1.0

## 0.0.27

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.27

## 0.0.26

#### Patch Changes

- @spacefast/common@0.0.26

## 0.0.25

#### Patch Changes

- @spacefast/common@0.0.25

## 0.0.24

#### Patch Changes

- @spacefast/common@0.0.24

## 0.0.23

#### Patch Changes

- @spacefast/common@0.0.23

## 0.0.22

#### Patch Changes

- @spacefast/common@0.0.22

## 0.0.21

#### Patch Changes

- @spacefast/common@0.0.21

## 0.0.20

#### Patch Changes

- @spacefast/common@0.0.20

## 0.0.19

#### Patch Changes

- @spacefast/common@0.0.19

## 0.0.18

#### Patch Changes

- Give the clean release declaration build enough heap to complete before npm publication.
- Updated dependencies
  - @spacefast/common@0.0.18

## 0.0.17

#### Patch Changes

- @spacefast/common@0.0.17

## 0.0.16

#### Patch Changes

- @spacefast/common@0.0.16

## 0.0.15

#### Patch Changes

- @spacefast/common@0.0.15

## 0.0.14

#### Patch Changes

- Keep successful Node CLI commands quiet by hosting the packaged Rust finalizer without Node's
  experimental WASI module.
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.14

## 0.0.13

- Reserved response headers are now caught early with a clear error.

## 0.0.12

- Various bug fixes and improvements.

## 0.0.11

_No noted changes in this release._

## 0.0.10

_No noted changes in this release._

## 0.0.9

_No noted changes in this release._

## 0.0.8

_No noted changes in this release._

## 0.0.7

_No noted changes in this release._

## 0.0.6

_No noted changes in this release._
