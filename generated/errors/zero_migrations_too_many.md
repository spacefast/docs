---
title: "zero_migrations_too_many"
description: "The compiled Zero migrations exceed the runtime statement limit."
---

The compiled Zero migrations exceed the runtime statement limit.

**How to resolve:** Reduce the schema or migration changes to the limit reported by the compiler before publishing again.

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
  "type": "https://spacefast.com/docs/errors/zero_migrations_too_many",
  "title": "Zero migrations too many",
  "status": 400,
  "detail": "The compiled Zero migrations exceed the runtime statement limit.",
  "code": "zero_migrations_too_many",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
