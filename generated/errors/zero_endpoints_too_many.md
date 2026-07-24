---
title: "zero_endpoints_too_many"
description: "The Zero endpoints payload exceeds the supported endpoint count."
---

The Zero endpoints payload exceeds the supported endpoint count.

**How to resolve:** Reduce the project to at most 128 Zero endpoints, then publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoints_too_many",
    "message": "The Zero endpoints payload exceeds the supported endpoint count.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_endpoints_too_many",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
