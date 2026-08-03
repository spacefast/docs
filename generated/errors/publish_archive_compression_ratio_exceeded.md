---
title: "publish_archive_compression_ratio_exceeded"
description: "The archive's compression ratio is suspiciously high and was rejected."
---

The archive's compression ratio is suspiciously high and was rejected.

**How to resolve:** Repackage the content without highly-compressible filler data.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_archive_compression_ratio_exceeded",
    "message": "The archive's compression ratio is suspiciously high and was rejected.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_archive_compression_ratio_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
