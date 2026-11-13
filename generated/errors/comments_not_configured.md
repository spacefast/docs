---
title: "comments_not_configured"
description: "Comments aren't set up on the server for this Space yet."
---

Comments aren't set up on the server for this Space yet.

**How to resolve:** Contact support with the requestId. Retrying gets the same answer until it's fixed.

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
  "type": "https://spacefast.com/docs/errors/comments_not_configured",
  "title": "Comments not configured",
  "status": 400,
  "detail": "Comments aren't set up on the server for this Space yet.",
  "code": "comments_not_configured",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
