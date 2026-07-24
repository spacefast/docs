---
title: "log_retention_clamped"
description: "The requested log range exceeds the plan's retention and was clamped."
---

The requested log range exceeds the plan's retention and was clamped.

**How to resolve:** Narrow the range.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "log_retention_clamped",
    "message": "The requested log range exceeds the plan's retention and was clamped.",
    "docsUrl": "https://spacefast.com/docs/errors/log_retention_clamped",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
