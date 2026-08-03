---
title: "config_name_too_long"
description: "The name in the space configuration exceeds its maximum length."
---

The name in the space configuration exceeds its maximum length.

**How to resolve:** Shorten the name in sf.jsonc to 255 characters or fewer.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "config_name_too_long",
    "message": "The name in the space configuration exceeds its maximum length.",
    "docsUrl": "https://docs.spacefast.com/errors/config_name_too_long",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
