---
title: "publish_archive_file_count_exceeded"
description: "The archive contains more files than the allowed ceiling."
---

The archive contains more files than the allowed ceiling.

**How to resolve:** Reduce the file count or split content across multiple spaces.

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
  "type": "https://spacefast.com/docs/errors/publish_archive_file_count_exceeded",
  "title": "Publish archive file count exceeded",
  "status": 400,
  "detail": "The archive contains more files than the allowed ceiling.",
  "code": "publish_archive_file_count_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
