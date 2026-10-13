---
title: "session_not_fresh"
description: "This action needs a recent identity confirmation."
---

This action needs a recent identity confirmation.

**How to resolve:** Confirm it's you (password, authenticator code, or a code sent to your primary email), then retry.

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
  "type": "https://spacefast.com/docs/errors/session_not_fresh",
  "title": "Session not fresh",
  "status": 400,
  "detail": "This action needs a recent identity confirmation.",
  "code": "session_not_fresh",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
