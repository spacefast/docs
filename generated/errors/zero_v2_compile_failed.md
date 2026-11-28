---
title: "zero_v2_compile_failed"
description: "The Zero v2 project did not compile on the host."
---

The Zero v2 project did not compile on the host.

**How to resolve:** Read the message for the file and line, run `sf zero check --json` to see the same diagnostics locally, fix them, and publish again.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_compile_failed",
  "title": "Zero v2 compile failed",
  "status": 422,
  "detail": "The Zero v2 project did not compile on the host.",
  "code": "zero_v2_compile_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
