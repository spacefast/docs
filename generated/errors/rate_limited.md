---
title: "rate_limited"
description: "Too many requests were made in a short window."
---

Too many requests were made in a short window.

**How to resolve:** Wait for the window in the Retry-After header to pass, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "rate_limited",
    "message": "Too many requests were made in a short window.",
    "docsUrl": "https://spacefast.com/docs/errors/rate_limited",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
