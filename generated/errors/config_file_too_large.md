---
title: "config_file_too_large"
description: "The sf.jsonc configuration file exceeds the maximum size."
---

The sf.jsonc configuration file exceeds the maximum size.

**How to resolve:** Keep the configuration file under the documented size limit (256 KB).

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "config_file_too_large",
    "message": "The sf.jsonc configuration file exceeds the maximum size.",
    "docsUrl": "https://spacefast.com/docs/errors/config_file_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
