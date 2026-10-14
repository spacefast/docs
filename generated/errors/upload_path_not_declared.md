---
title: "upload_path_not_declared"
description: "An uploaded path was not declared in the version's manifest."
---

An uploaded path was not declared in the version's manifest.

**How to resolve:** Declare every path up front.

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
  "type": "https://spacefast.com/docs/errors/upload_path_not_declared",
  "title": "Upload path not declared",
  "status": 400,
  "detail": "An uploaded path was not declared in the version's manifest.",
  "code": "upload_path_not_declared",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
