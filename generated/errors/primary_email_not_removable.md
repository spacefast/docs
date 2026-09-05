---
title: "primary_email_not_removable"
description: "The address being removed is the account's primary address."
---

The address being removed is the account's primary address.

**How to resolve:** Make another verified address primary, then remove this one.

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
  "type": "https://spacefast.com/docs/errors/primary_email_not_removable",
  "title": "Primary email not removable",
  "status": 400,
  "detail": "The address being removed is the account's primary address.",
  "code": "primary_email_not_removable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
