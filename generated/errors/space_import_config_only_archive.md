---
title: "space_import_config_only_archive"
description: "The archive contains only configuration and cannot be imported as content."
---

The archive contains only configuration and cannot be imported as content.

**How to resolve:** Include files in the export, or apply the configuration directly.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_import_config_only_archive",
    "message": "The archive contains only configuration and cannot be imported as content.",
    "docsUrl": "https://spacefast.com/docs/errors/space_import_config_only_archive",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
