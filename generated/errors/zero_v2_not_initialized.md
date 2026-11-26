---
title: "zero_v2_not_initialized"
description: "This Zero version hasn't finished setting up on its box."
---

This Zero version hasn't finished setting up on its box.

**How to resolve:** Publish again. If it keeps happening, read the finalize diagnostics for the version.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_not_initialized",
  "title": "Zero v2 not initialized",
  "status": 422,
  "detail": "This Zero version hasn't finished setting up on its box.",
  "code": "zero_v2_not_initialized",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
