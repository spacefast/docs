---
title: "zero_mixed_generation"
description: "The publish has both sf.jsonc runtime.kind \"zero\" and zero.config.ts."
---

The publish has both sf.jsonc runtime.kind "zero" and zero.config.ts.

**How to resolve:** Remove runtime.kind from sf.jsonc and its compiled artifacts, then publish the zero.config.ts app.

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
  "type": "https://spacefast.com/docs/errors/zero_mixed_generation",
  "title": "Zero mixed generation",
  "status": 422,
  "detail": "The publish has both sf.jsonc runtime.kind \"zero\" and zero.config.ts.",
  "code": "zero_mixed_generation",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
