---
title: Spaces
description: The stable resource that owns a site, its live URL, versions, configuration, access policy, domains, and collaboration state.
---

A space is the durable resource behind a Spacefast site. Publishing changes its
content; it does not replace its identity. The live URL stays stable while each
successful publish creates an immutable version URL.

## What a space owns

- The current live version and its stable URL.
- Immutable versions, build history, and rollback.
- Routing, headers, page behavior, and other [configuration](/configuration).
- [Access policy](/access), [custom domains](/domains), and [Collab](/collab).

Use the [REST API reference](/api/reference) for exact request and response
shapes. The CLI exposes the same resources with human-friendly commands.

## Ordinary lifecycle

1. Create a space directly or let the first publish create it.
2. Publish static output as a new version.
3. Inspect the receipt and wait for the version to become ready.
4. Update configuration or attach a domain without changing the space identity.
5. Promote an earlier version when you need to roll back.

Start with [publishing](/publishing), then read [versions](/versions) for the
release boundary.
