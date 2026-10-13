---
title: "principal_closed"
description: "The external principal is closed. Its spaces are tombstoned and cannot be modified."
---

The external principal is closed. Its spaces are tombstoned and cannot be modified.

**How to resolve:** A closed principal is terminal and cannot be reopened; create a new principal to resume.

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
  "type": "https://spacefast.com/docs/errors/principal_closed",
  "title": "Principal closed",
  "status": 400,
  "detail": "The external principal is closed. Its spaces are tombstoned and cannot be modified.",
  "code": "principal_closed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
