---
title: "@spacefast/common"
description: "Release history for @spacefast/common on npm."
---

Published as [`@spacefast/common`](https://www.npmjs.com/package/@spacefast/common) on npm.

## 0.3.0

_No noted changes in this release._

## 0.2.2

_No noted changes in this release._

## 0.2.1

_No noted changes in this release._

## 0.2.0

#### Patch Changes

- Consolidate the MCP docs surface into a single `search_docs` tool: a query that is exactly one page's slug or path now returns that page in full, replacing `get_page`.

## 0.1.0

#### Patch Changes

- Repair the documentation URLs in the feature lifecycle registry and the bundled docs catalog, which broke when the documentation site reorganized its routes. `sf docs` and `GET /v1/docs` served six URLs that 404 or land on the wrong page, and every `public` docs slug in the feature registry pointed at a route that no longer exists.

## 0.0.27

#### Patch Changes

- Consolidate the MCP docs surface into a single `search_docs` tool: a query that is exactly one page's slug or path now returns that page in full, replacing `get_page`.
- Publish the agent integration registry at `agents/registry/core` (browser-safe) and `agents/registry/node` (paths and MCP config mechanics) as the single source for all 24 agent setup surfaces. The website and the public docs exporter render from it, replacing their hand-maintained agent lists.

## 0.0.26

_No noted changes in this release._

## 0.0.25

_No noted changes in this release._

## 0.0.24

_No noted changes in this release._

## 0.0.23

_No noted changes in this release._

## 0.0.22

_No noted changes in this release._

## 0.0.21

_No noted changes in this release._

## 0.0.20

_No noted changes in this release._

## 0.0.19

_No noted changes in this release._

## 0.0.18

#### Patch Changes

- Give the clean release declaration build enough heap to complete before npm publication.

## 0.0.17

_No noted changes in this release._

## 0.0.16

_No noted changes in this release._

## 0.0.15

_No noted changes in this release._

## 0.0.14

#### Patch Changes

- Make Zero generally available on every plan, including local development, hosted execution, and Cast-backed realtime updates.
- Add Railway-style agent setup with repeated client targeting, optional project-scoped skills, integrated auth health, safe install/update/removal, popular agent consumers, local/remote-proxy/remote-OAuth connection methods, and direct variable, domain, and repository MCP lifecycle tools.

## 0.0.13

- Reserved response headers are now caught early with a clear error.

## 0.0.12

_No noted changes in this release._

## 0.0.11

_No noted changes in this release._

## 0.0.10

_No noted changes in this release._

## 0.0.9

_No noted changes in this release._

## 0.0.8

_No noted changes in this release._

## 0.0.7

- Consistent naming rules for spaces and teams.

## 0.0.6

_No noted changes in this release._
