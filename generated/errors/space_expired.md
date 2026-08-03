---
title: "space_expired"
description: "The space expired and is no longer served."
---

The space expired and is no longer served.

**How to resolve:** If it is within the recovery window, claim or restore it. Otherwise publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_expired",
    "message": "The space expired and is no longer served.",
    "docsUrl": "https://docs.spacefast.com/errors/space_expired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
