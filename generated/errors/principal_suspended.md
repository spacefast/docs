---
title: "principal_suspended"
description: "The external principal is suspended. Its spaces serve the suspended page and its mutations are blocked."
---

The external principal is suspended. Its spaces serve the suspended page and its mutations are blocked.

**How to resolve:** Unsuspend the principal to restore serving and writes; a Spacefast-applied suspension can only be lifted by Spacefast.

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
  "type": "https://spacefast.com/docs/errors/principal_suspended",
  "title": "Principal suspended",
  "status": 400,
  "detail": "The external principal is suspended. Its spaces serve the suspended page and its mutations are blocked.",
  "code": "principal_suspended",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
