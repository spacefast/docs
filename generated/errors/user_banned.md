---
title: "user_banned"
description: "This user is banned for a policy or abuse violation and cannot perform this action."
---

This user is banned for a policy or abuse violation and cannot perform this action.

**How to resolve:** Contact support to appeal the ban if you believe it is a mistake.

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
  "type": "https://docs.spacefast.com/docs/errors/user_banned",
  "title": "User banned",
  "status": 400,
  "detail": "This user is banned for a policy or abuse violation and cannot perform this action.",
  "code": "user_banned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
