---
title: "invitation_expired"
description: "The invitation has expired and can no longer be accepted."
---

The invitation has expired and can no longer be accepted.

**How to resolve:** Ask a team admin to send a fresh invitation, then accept the new one.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/invitation_expired",
  "title": "Invitation expired",
  "status": 400,
  "detail": "The invitation has expired and can no longer be accepted.",
  "code": "invitation_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
