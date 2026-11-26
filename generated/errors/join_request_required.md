---
title: "join_request_required"
description: "This subteam's `joinPolicy` is `request`, so people in its parent team cannot join it by themselves."
---

This subteam's `joinPolicy` is `request`, so people in its parent team cannot join it by themselves.

**How to resolve:** Ask one of the subteam's admins to add or invite you. An invitation still lets you straight in.

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
  "type": "https://spacefast.com/docs/errors/join_request_required",
  "title": "Join request required",
  "status": 422,
  "detail": "This subteam's `joinPolicy` is `request`, so people in its parent team cannot join it by themselves.",
  "code": "join_request_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
