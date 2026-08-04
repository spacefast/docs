---
title: "not_enrolled"
description: "This account is not enrolled in the private beta, so the API cannot be used yet."
---

This account is not enrolled in the private beta, so the API cannot be used yet.

**How to resolve:** Join the waitlist or open your beta invite link, then sign in again.

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
  "type": "https://docs.spacefast.com/docs/errors/not_enrolled",
  "title": "Not enrolled",
  "status": 400,
  "detail": "This account is not enrolled in the private beta, so the API cannot be used yet.",
  "code": "not_enrolled",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
