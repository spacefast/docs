---
title: "anonymous_publish_rate_limited"
description: "Too many anonymous publishes came from this network in a short window."
---

Too many anonymous publishes came from this network in a short window.

**How to resolve:** Wait for the window to pass, or sign in with an API key for higher limits.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "anonymous_publish_rate_limited",
    "message": "Too many anonymous publishes came from this network in a short window.",
    "docsUrl": "https://docs.spacefast.com/errors/anonymous_publish_rate_limited",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
