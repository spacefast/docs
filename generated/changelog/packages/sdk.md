---
title: "@spacefast/sdk"
description: "Release history for @spacefast/sdk on npm."
---

Published as [`@spacefast/sdk`](https://www.npmjs.com/package/@spacefast/sdk) on npm.

## 0.5.0

#### Minor Changes

- Claim a hostname attached to another Space with a unique DNS TXT record, or move it directly when authorized to manage both Spaces. Expose ownership instructions and move status through the API and CLI, including `sf domains check --move`.
- Bind every upload to the API the caller selected, and to the session response
  that API returned. `uploadSessionFiles` now requires `apiUrl`: it is the origin
  a relative target resolves against, and the only non-runtime origin an upload
  may reach. Previously any HTTPS target the session response named was accepted,
  so a substituted target received the caller's bytes and session headers.

  An upload destination now has to satisfy two independent facts, and route shape
  is neither. Its host must be one the session response named (or the selected
  API origin), and it must be a runtime upload endpoint naming the caller's own
  Space or upload session — anything else has to be verbatim a destination that
  session issued. Matching `/spaces/<id>/blobs/<sha>` no longer admits a host: the
  Space id is already in every legitimate target, so it is not a secret and cannot
  establish who receives the bytes. Reaching a trusted origin is likewise not
  enough to reach an arbitrary resource on it.

  This is a breaking change for direct callers of `uploadSessionFiles` from
  `@spacefast/sdk/publish`. Pass the API base URL you already configured for the
  transport; never read it back out of the upload session. Direct callers of
  `assertUploadDestination` in `@spacefast/common/utils/upload-session` must now
  supply `named` — use `uploadSessionDestinations(session)`.

#### Patch Changes

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

#### Minor Changes

- Add the complete Partner API client, generated schema, OpenAPI document, and
  per-principal TanStack Query family. Partner applications can use all partner
  operations without local code generation, while sharing the SDK's transport,
  errors, retries, envelopes, and publish helpers.

#### Patch Changes

- @spacefast/common@0.3.0

## 0.2.2

#### Patch Changes

- @spacefast/common@0.2.2

## 0.2.1

#### Patch Changes

- Recover a committed finalize instead of reporting failure. When the finalize POST died in flight — a gateway failure, a socket drop, a client deadline — the SDK went straight to observing the version, so a finalize the runtime had already committed but the control plane never recorded left the publish reporting failure over a site that was already live. Finalize is idempotent on both server hops (the control plane answers a repeat call for a ready version with its receipt, and the runtime box holds a ready receipt for a version it committed), so an ambiguous outcome now gets one bounded re-POST first: a committed finalize comes back as the ordinary success receipt in one round trip, and one that never committed is re-driven. Everything the replay cannot settle still falls through to the existing readiness poll.
- Skip uploading blobs the runtime already holds. Before a page of upload targets goes out, the publish driver asks the box which of the declared sha256s it is missing and PUTs only those; the rest are credited to the publish session server-side, so the version still finalizes complete. Pages smaller than eight files skip the negotiation, and any failure falls back to a full upload.
- @spacefast/common@0.2.1

## 0.2.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.2.0

## 0.1.0

#### Minor Changes

- Add the `@spacefast/sdk/query` subpath: a TanStack Query layer generated from the same `openapi.json` that types the rest of the package. Every operation gets `<operationId>Options()`, `<operationId>QueryKey()`, `<operationId>InfiniteOptions()` and `<operationId>Mutation()` factories, alongside a small policy vocabulary (`bySpace`, `byTeam`, `byOperation`, `byTag`, `STALE_TIME_MS`, `cursorPages`) for hierarchical invalidation and cache tiers. Failed calls throw the same `SpacefastApiError` as the hand-written client. `@tanstack/react-query` is an optional peer dependency and only this subpath imports it.

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

- Use provider-neutral API values: the space database backend is `mysql`, the
  database console provider is `phpmyadmin`, diagnostics attribute infra-origin
  failures to `infra`, team settings expose `infraCapabilities`, and the capsule
  runner compatibility profile is `linux-x86_64-gnu-v1`.
  - @spacefast/common@0.0.25

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

_No noted changes in this release._

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
