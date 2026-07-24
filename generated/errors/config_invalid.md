---
title: "config_invalid"
description: "The space configuration failed validation."
---

The space configuration failed validation.

**How to resolve:** Fix the reported fields against the published schema at /schemas/sf.json.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "config_invalid",
    "message": "The space configuration failed validation.",
    "docsUrl": "https://spacefast.com/docs/errors/config_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
