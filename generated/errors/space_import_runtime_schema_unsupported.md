---
title: "space_import_runtime_schema_unsupported"
description: "The export was produced by an unsupported runtime schema version."
---

The export was produced by an unsupported runtime schema version.

**How to resolve:** Re-export from a current runtime, or upgrade before exporting.

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
  "type": "https://spacefast.com/docs/errors/space_import_runtime_schema_unsupported",
  "title": "Space import runtime schema unsupported",
  "status": 400,
  "detail": "The export was produced by an unsupported runtime schema version.",
  "code": "space_import_runtime_schema_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
