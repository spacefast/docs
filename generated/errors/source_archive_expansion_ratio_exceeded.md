---
title: "source_archive_expansion_ratio_exceeded"
description: "The uploaded source archive expands too much relative to its compressed size."
---

The uploaded source archive expands too much relative to its compressed size.

**How to resolve:** Rebuild the archive without highly compressible filler or generated content, then upload it again.

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
  "type": "https://spacefast.com/docs/errors/source_archive_expansion_ratio_exceeded",
  "title": "Source archive expansion ratio exceeded",
  "status": 400,
  "detail": "The uploaded source archive expands too much relative to its compressed size.",
  "code": "source_archive_expansion_ratio_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
