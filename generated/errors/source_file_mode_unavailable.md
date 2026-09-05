---
title: "source_file_mode_unavailable"
description: "The source file has no supported mode in the provider metadata."
---

The source file has no supported mode in the provider metadata.

**How to resolve:** Read the file metadata again or provide an explicit supported mode.

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
  "type": "https://spacefast.com/docs/errors/source_file_mode_unavailable",
  "title": "Source file mode unavailable",
  "status": 400,
  "detail": "The source file has no supported mode in the provider metadata.",
  "code": "source_file_mode_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
