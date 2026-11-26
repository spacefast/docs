---
title: "zero_source_needs_local_capture"
description: "This Zero source imports npm packages that the host cannot install."
---

This Zero source imports npm packages that the host cannot install.

**How to resolve:** Publish from an installed local project with sf publish. The CLI captures npm sources with its included wasm compiler.

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
  "type": "https://spacefast.com/docs/errors/zero_source_needs_local_capture",
  "title": "Zero source needs local capture",
  "status": 422,
  "detail": "This Zero source imports npm packages that the host cannot install.",
  "code": "zero_source_needs_local_capture",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
