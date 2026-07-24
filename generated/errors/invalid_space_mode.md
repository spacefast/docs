---
title: "invalid_space_mode"
description: "The requested space serving mode is not supported."
---

The requested space serving mode is not supported.

**How to resolve:** Use a supported serving configuration.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_space_mode",
    "message": "The requested space serving mode is not supported.",
    "docsUrl": "https://spacefast.com/docs/errors/invalid_space_mode",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
