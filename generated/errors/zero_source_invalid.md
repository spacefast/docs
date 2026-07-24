---
title: "zero_source_invalid"
description: "The Zero endpoint source is invalid."
---

The Zero endpoint source is invalid.

**How to resolve:** Fix the generated endpoint source and rebuild.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_source_invalid",
    "message": "The Zero endpoint source is invalid.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_source_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
