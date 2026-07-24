---
title: "source_archive_decompression_timeout"
description: "The uploaded source archive did not finish decompressing within the validation limit."
---

The uploaded source archive did not finish decompressing within the validation limit.

**How to resolve:** Reduce the archive's compressed complexity or split it into a smaller source upload, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "source_archive_decompression_timeout",
    "message": "The uploaded source archive did not finish decompressing within the validation limit.",
    "docsUrl": "https://spacefast.com/docs/errors/source_archive_decompression_timeout",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
