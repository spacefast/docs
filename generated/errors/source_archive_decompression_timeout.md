---
title: "source_archive_decompression_timeout"
description: "The uploaded source archive did not finish decompressing within the validation limit."
---

The uploaded source archive did not finish decompressing within the validation limit.

**How to resolve:** Reduce the archive's compressed complexity or split it into a smaller source upload, then retry.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/source_archive_decompression_timeout",
  "title": "Source archive decompression timeout",
  "status": 400,
  "detail": "The uploaded source archive did not finish decompressing within the validation limit.",
  "code": "source_archive_decompression_timeout",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
