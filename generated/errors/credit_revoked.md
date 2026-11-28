---
title: "credit_revoked"
description: "Spacefast withdrew this credit, so it can't be redeemed."
---

Spacefast withdrew this credit, so it can't be redeemed.

**How to resolve:** Contact Spacefast support if you think this is a mistake.

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
  "type": "https://spacefast.com/docs/errors/credit_revoked",
  "title": "Credit revoked",
  "status": 422,
  "detail": "Spacefast withdrew this credit, so it can't be redeemed.",
  "code": "credit_revoked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
