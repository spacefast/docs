---
title: SDK
description: Use the generated Spacefast TypeScript client when you want typed access to the REST API.
---

The Spacefast SDK is generated from the same OpenAPI document as the
[REST API reference](/api/reference). Use it when you want typed requests and
responses without hand-writing HTTP calls.

The API remains the contract. Authentication, envelopes, idempotency, and error
codes behave exactly as described in the [REST API guide](/api), regardless of
whether a request comes from the SDK, CLI, dashboard, or MCP.

For installation and exported client names, use the package metadata for the
release you install. If a capability is not present in that generated release,
use the documented REST endpoint directly rather than guessing a method name.
