---
title: "build_output_contains_server_bundle"
description: "The publish output contains a compiled server bundle."
---

The publish output contains a compiled server bundle.

**How to resolve:** Publish with `sf publish` so the server code goes through the functions pipeline, or point the output directory at a browser-ready export.

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
  "type": "https://spacefast.com/docs/errors/build_output_contains_server_bundle",
  "title": "Build output contains server bundle",
  "status": 400,
  "detail": "The publish output contains a compiled server bundle.",
  "code": "build_output_contains_server_bundle",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
