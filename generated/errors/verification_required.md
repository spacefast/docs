---
title: "verification_required"
description: "Domain verification is required before this operation."
---

Domain verification is required before this operation.

**How to resolve:** Add the verification DNS record, then run verify on the domain.

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
  "type": "https://spacefast.com/docs/errors/verification_required",
  "title": "Verification required",
  "status": 400,
  "detail": "Domain verification is required before this operation.",
  "code": "verification_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
