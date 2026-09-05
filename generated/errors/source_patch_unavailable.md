---
title: "source_patch_unavailable"
description: "CodeStorage did not return a complete patch for the selected hunks."
---

CodeStorage did not return a complete patch for the selected hunks.

**How to resolve:** Read the diff again or select the complete file.

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
  "type": "https://spacefast.com/docs/errors/source_patch_unavailable",
  "title": "Source patch unavailable",
  "status": 400,
  "detail": "CodeStorage did not return a complete patch for the selected hunks.",
  "code": "source_patch_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
