---
title: "anonymous_expired"
description: "This anonymous space expired before it was claimed."
---

This anonymous space expired before it was claimed.

**How to resolve:** Publish a fresh space and share its claim link right away this time. If you meant to update a live space, check .spacefast/ (or your saved receipt) for its spaceId. Publish to that space with its credential instead of creating a new space.

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
  "type": "https://spacefast.com/docs/errors/anonymous_expired",
  "title": "Anonymous expired",
  "status": 400,
  "detail": "This anonymous space expired before it was claimed.",
  "code": "anonymous_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
