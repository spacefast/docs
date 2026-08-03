---
title: "source_archive_expansion_ratio_exceeded"
description: "The uploaded source archive expands too much relative to its compressed size."
---

The uploaded source archive expands too much relative to its compressed size.

**How to resolve:** Rebuild the archive without highly compressible filler or generated content, then upload it again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "source_archive_expansion_ratio_exceeded",
    "message": "The uploaded source archive expands too much relative to its compressed size.",
    "docsUrl": "https://docs.spacefast.com/errors/source_archive_expansion_ratio_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
