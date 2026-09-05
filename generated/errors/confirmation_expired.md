---
title: "confirmation_expired"
description: "The confirmation for this action expired before it was used."
---

The confirmation for this action expired before it was used.

**How to resolve:** Request a new decision and stop retrying the expired continuation token.

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
  "type": "https://spacefast.com/docs/errors/confirmation_expired",
  "title": "Confirmation expired",
  "status": 400,
  "detail": "The confirmation for this action expired before it was used.",
  "code": "confirmation_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
