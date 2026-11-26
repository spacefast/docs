---
title: "zero_v2_compiler_mismatch"
description: "The host's Zero compiler is a different version from the one its runtime engine expects."
---

The host's Zero compiler is a different version from the one its runtime engine expects.

**How to resolve:** Nothing in the project causes this. Publish again later, and contact support with the request ID if it keeps happening.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_compiler_mismatch",
  "title": "Zero v2 compiler mismatch",
  "status": 422,
  "detail": "The host's Zero compiler is a different version from the one its runtime engine expects.",
  "code": "zero_v2_compiler_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
