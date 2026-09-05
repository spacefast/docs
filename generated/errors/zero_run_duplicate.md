---
title: "zero_run_duplicate"
description: "The same Zero run handler is declared more than once."
---

The same Zero run handler is declared more than once.

**How to resolve:** Remove the duplicate run handler, then publish again.

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
  "type": "https://spacefast.com/docs/errors/zero_run_duplicate",
  "title": "Zero run duplicate",
  "status": 400,
  "detail": "The same Zero run handler is declared more than once.",
  "code": "zero_run_duplicate",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
