---
title: "registration_expiring"
description: "The domain registration is about to expire, which blocks this operation."
---

The domain registration is about to expire, which blocks this operation.

**How to resolve:** Renew the domain first, then retry.

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
  "type": "https://spacefast.com/docs/errors/registration_expiring",
  "title": "Registration expiring",
  "status": 400,
  "detail": "The domain registration is about to expire, which blocks this operation.",
  "code": "registration_expiring",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
