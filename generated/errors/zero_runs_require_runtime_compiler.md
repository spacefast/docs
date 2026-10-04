---
title: "zero_runs_require_runtime_compiler"
description: "Zero run handlers require the Rust runtime compiler."
---

Zero run handlers require the Rust runtime compiler.

**How to resolve:** Install the current runtime compiler and finalize the version again.

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
  "type": "https://spacefast.com/docs/errors/zero_runs_require_runtime_compiler",
  "title": "Zero runs require runtime compiler",
  "status": 400,
  "detail": "Zero run handlers require the Rust runtime compiler.",
  "code": "zero_runs_require_runtime_compiler",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
