---
title: "export_archive_not_ready"
description: "The export archive is still being prepared."
---

The export archive is still being prepared.

**How to resolve:** Poll the export until its status is ready, then download the archive.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "export_archive_not_ready",
    "message": "The export archive is still being prepared.",
    "docsUrl": "https://spacefast.com/docs/errors/export_archive_not_ready",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
