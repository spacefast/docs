---
title: "user_banned"
description: "The user is banned, so their access was disconnected."
---

The user is banned, so their access was disconnected.

**How to resolve:** Contact Spacefast support if the ban looks wrong.

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
  "type": "https://spacefast.com/docs/errors/user_banned",
  "title": "User banned",
  "status": 400,
  "detail": "The user is banned, so their access was disconnected.",
  "code": "user_banned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
