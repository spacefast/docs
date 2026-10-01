---
title: "zero_js_context_init_failed"
description: "The Zero runner cannot initialize a QuickJS context."
---

The Zero runner cannot initialize a QuickJS context.

**How to resolve:** Retry or rebuild the runner. Report persistent runtime initialization failures.

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
  "type": "https://spacefast.com/docs/errors/zero_js_context_init_failed",
  "title": "Zero js context init failed",
  "status": 400,
  "detail": "The Zero runner cannot initialize a QuickJS context.",
  "code": "zero_js_context_init_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
