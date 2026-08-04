---
title: "invalid_continuation_token"
description: "The continuation token is invalid, expired, or already finished."
---

The continuation token is invalid, expired, or already finished.

**How to resolve:** Restart the originating flow to obtain a fresh requiresAction envelope and continuation token.

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
  "type": "https://spacefast.com/docs/errors/invalid_continuation_token",
  "title": "Invalid continuation token",
  "status": 400,
  "detail": "The continuation token is invalid, expired, or already finished.",
  "code": "invalid_continuation_token",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
