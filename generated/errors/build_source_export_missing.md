---
title: "build_source_export_missing"
description: "A source file imports a name that the referenced module does not export."
---

A source file imports a name that the referenced module does not export.

**How to resolve:** Open the importing file named in the build log. Export the requested name from the referenced module or update the import to match its exports, then start a new build.

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
  "type": "https://spacefast.com/docs/errors/build_source_export_missing",
  "title": "Build source export missing",
  "status": 422,
  "detail": "A source file imports a name that the referenced module does not export.",
  "code": "build_source_export_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
