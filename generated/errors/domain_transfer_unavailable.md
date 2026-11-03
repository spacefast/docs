---
title: "domain_transfer_unavailable"
description: "Domain transfers into or out of Spacefast aren't available yet. Nothing was changed."
---

Domain transfers into or out of Spacefast aren't available yet. Nothing was changed.

**How to resolve:** Keep the domain where it is for now. To move a domain registered here to another registrar, contact support.

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
  "type": "https://spacefast.com/docs/errors/domain_transfer_unavailable",
  "title": "Domain transfer unavailable",
  "status": 400,
  "detail": "Domain transfers into or out of Spacefast aren't available yet. Nothing was changed.",
  "code": "domain_transfer_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
