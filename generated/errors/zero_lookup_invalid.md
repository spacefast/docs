---
title: "zero_lookup_invalid"
description: "The Zero lookup map contains an invalid path or action."
---

The Zero lookup map contains an invalid path or action.

**How to resolve:** Use normalized relative paths and valid finalized Zero actions.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_lookup_invalid",
    "message": "The Zero lookup map contains an invalid path or action.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_lookup_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
