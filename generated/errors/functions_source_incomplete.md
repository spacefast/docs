---
title: "functions_source_incomplete"
description: "A partial change to a Functions worker cannot be built, because the live worker's other source files are not stored in the Space."
---

A partial change to a Functions worker cannot be built, because the live worker's other source files are not stored in the Space.

**How to resolve:** Publish every worker source file together: the routes under functions/, or the entry named in runtime.entry and every module it imports. The error lists the routes whose source was missing.

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
  "type": "https://spacefast.com/docs/errors/functions_source_incomplete",
  "title": "Functions source incomplete",
  "status": 422,
  "detail": "A partial change to a Functions worker cannot be built, because the live worker's other source files are not stored in the Space.",
  "code": "functions_source_incomplete",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
