---
title: "@spacefast/domain-sdk"
description: "Release history for @spacefast/domain-sdk on npm."
---

Published as [`@spacefast/domain-sdk`](https://www.npmjs.com/package/@spacefast/domain-sdk) on npm.

## 0.10.0

_No noted changes in this release._

## 0.9.0

#### Patch Changes

- The MCP domain progress panel and domain SDK treat absent TXT challenges and successful TXT proof as completed ownership independently of pending HTTPS. Domain guidance distinguishes legacy inventory proof, native inventory status, compatibility overlays, and Space-attachment provider readiness.

  Forward TXT challenge diagnostics through the MCP tool response without turning an absent older-API field into a completed challenge. Attachment failures keep the overall MCP domain state in setup-needed even when ownership is complete or a certificate is active.

  MCP and the domain SDK still wait for Spacefast DNS zone proof when no hostname TXT challenge is required, preserving pending ownership and the zone's ownership instructions.

  An existing provider certificate does not make a pending Space attachment ready: MCP keeps checking, and the domain SDK waits for attachment readiness even after ownership completes.

## 0.8.1

_No noted changes in this release._

## 0.8.0

_No noted changes in this release._

## 0.7.0

#### Patch Changes

- Preserve CNAME records in Spacefast DNS instructions and report their routing status from hostname diagnostics.

## 0.6.1

_No noted changes in this release._

## 0.6.0

_No noted changes in this release._

## 0.5.1

_No noted changes in this release._

## 0.5.0

#### Minor Changes

- Publish `@spacefast/domain-sdk`, the Spacefast provider for `domain-sdk`. A product that lets its customers bring a domain can now drive Spacefast through the same typed client it already uses for Vercel, Cloudflare, or Netlify: `add`, `get`, `list`, `verify`, and `remove` over the custom domains on one Space.

  An apex and its `www` twin are one Spacefast attachment, so either spelling resolves to the same domain and each answer reports the hostname that was asked for. The Space's own `*.view.fast` hostname stays hidden, `add()` is idempotent across a concurrent attach, and record and certificate state come from the Space's live diagnostics — reported as `unknown` when those cannot be read, rather than claiming something was observed.
