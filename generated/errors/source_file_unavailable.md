---
title: "source_file_unavailable"
description: "The selected source snapshot did not return complete file contents."
---

The selected source snapshot did not return complete file contents.

**How to resolve:** Retry the file read with the same source commit SHA.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/source_file_unavailable",
  "title": "Source file unavailable",
  "status": 400,
  "detail": "The selected source snapshot did not return complete file contents.",
  "code": "source_file_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
