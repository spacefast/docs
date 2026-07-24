---
title: "zero_source_unreadable"
description: "The Zero endpoint source file could not be read."
---

The Zero endpoint source file could not be read.

**How to resolve:** Verify the version finalized with generated source files present.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_source_unreadable",
    "message": "The Zero endpoint source file could not be read.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_source_unreadable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
