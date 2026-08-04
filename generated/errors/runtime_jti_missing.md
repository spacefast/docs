---
title: "runtime_jti_missing"
description: "The runtime token is missing its replay-protection id."
---

The runtime token is missing its replay-protection id.

**How to resolve:** Mint a fresh runtime token. Tokens must carry a jti claim.

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
  "type": "https://docs.spacefast.com/docs/errors/runtime_jti_missing",
  "title": "Runtime jti missing",
  "status": 400,
  "detail": "The runtime token is missing its replay-protection id.",
  "code": "runtime_jti_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
