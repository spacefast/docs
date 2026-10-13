---
title: "@spacefast/zero"
description: "Release history for @spacefast/zero on npm."
---

Published as [`@spacefast/zero`](https://www.npmjs.com/package/@spacefast/zero) on npm.

## 0.6.0

#### Patch Changes

- `EndpointRequest` now declares `params`, the values captured by `:name` segments of an endpoint's `path` (for example `req.params.slug` on `path: "/p/:slug"`). The hosted runtime and `sf dev` already passed them; only the type was missing.
- Realtime reconnects now back off exponentially with jitter (250–500ms first, up to 15–30s) instead of retrying every 500ms, and reset once the relay accepts a connection. A page whose Cast joins keep failing no longer mints a realtime ticket twice a second for as long as the tab stays open.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.6.0

## 0.5.1

#### Patch Changes

- @spacefast/common@0.5.1

## 0.5.0

#### Minor Changes

- Add `ctx.jwt.sign` and `ctx.crypto` to Zero server handlers. `ctx.jwt.sign({ key, kid, claims, ttlSeconds })` signs short-lived Ed25519 `at+jwt` access tokens with a key held in a secret variable that never enters `ctx.env`. `ctx.crypto` adds `sha256`, `hmacSha256`, and `timingSafeEqual` for webhook signature checks and key hashing.
- Add `@spacefast/zero/react`: React hooks (`useQuery`, `useMutation`, `useAction`, `usePaginatedQuery`, `useAuth`) and a typed `createClient<typeof app>()` over the same browser client as `@spacefast/zero/client`. React is an optional peer dependency; the React entry never loads Preact.
- Add per-Space app accounts with Google, Gravatar, and native Spacefast Access sign-in, verified email addresses, and revocable sessions. Add Users settings and account management to the API, SDK, CLI, and MCP.
- Actions are back, endpoints take `readOnly`, and `fetch()` works everywhere.

  `capsule({ actions })` declares handlers that read the database and reach the
  network without holding a transaction — `action()` on the server, `useAction()`
  on the client, over `action.run`. Persist what an action learned by handing its
  result to a mutation.

  `endpoint({ method, path, readOnly? })` replaces `mode`: a `GET` or `HEAD` reads,
  anything else writes, and `readOnly` overrides that when the method and the
  intent disagree. The derived mode still rides the compiled artifact.

  `fetch()` is a global in every handler kind. How far it reaches is decided by
  the space, not the build — an unclaimed space reaches a trusted host list, and
  claiming it opens the rest of the public web.

- Add numeric and optional database fields, user references, indexed counts, application sign-in policies, and transactional guest upgrades to Zero. Query hooks now distinguish loading from empty or null results. Uploads are private by default, with explicit public sharing.

  Add local development identities, multiple isolated dev servers, query inspection, storage transfers, and retained Space archive and restore commands. Newly compiled apps require an engine that implements these contracts before publication.

#### Patch Changes

- One hostname rule everywhere: `normalizeHostname` now lives in `@spacefast/common/utils/hostname` (`@spacefast/routing/hostname` still re-exports it). It folds ASCII case and trims ASCII whitespace only, as DNS does, so a non-ASCII host like `K.example` (Kelvin sign) no longer collapses into a different ASCII name. `verifyVisitorToken` in `@spacefast/zero` compares hosts with the same rule, so `example.com.` and `example.com` are one host.
- `verifyUser` reads only the `__Host-sfi_session` cookie over HTTPS, so a session cookie planted by a sibling host under the same parent domain is ignored.
- Updated dependencies
  - @spacefast/common@0.5.0
- Keep query results associated with their arguments while subscriptions change. Paginated clients no longer append the previous page again while the next cursor is loading.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0

## 0.4.1

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.4.1

## 0.4.0

#### Patch Changes

- @spacefast/common@0.4.0

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

- Run Lakebed 0.0.29 core capsules without import rewrites through Spacefast Zero, including actions, runtime-backed object storage, declared indexes, and the database v1 query API.
- Make Zero generally available on every plan, including local development, hosted execution, and Cast-backed realtime updates.

## 0.0.13

_No noted changes in this release._

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

_No noted changes in this release._

## 0.0.6

_No noted changes in this release._
