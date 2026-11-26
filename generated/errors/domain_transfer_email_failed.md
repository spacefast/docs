---
title: "domain_transfer_email_failed"
description: "The registrar refused the authorization email request."
---

The registrar refused the authorization email request.

**How to resolve:** Check the registrant contact and retry explicitly, or relock the domain.

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
  "type": "https://spacefast.com/docs/errors/domain_transfer_email_failed",
  "title": "Domain transfer email failed",
  "status": 422,
  "detail": "The registrar refused the authorization email request.",
  "code": "domain_transfer_email_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
