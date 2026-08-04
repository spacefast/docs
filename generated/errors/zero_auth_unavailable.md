---
title: "zero_auth_unavailable"
description: "Hosted Zero auth is not configured for this deployment."
---

Hosted Zero auth is not configured for this deployment.

**How to resolve:** Finalize the Zero version with hosted auth URLs or use guest/local auth.

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
  "type": "https://spacefast.com/docs/errors/zero_auth_unavailable",
  "title": "Zero auth unavailable",
  "status": 400,
  "detail": "Hosted Zero auth is not configured for this deployment.",
  "code": "zero_auth_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
