---
title: "domain_transfer_needs_attention"
description: "The transfer could not be confirmed or prepared."
---

The transfer could not be confirmed or prepared.

**How to resolve:** Check the transfer status and registrant inbox, then explicitly retry or relock the domain.

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
  "type": "https://spacefast.com/docs/errors/domain_transfer_needs_attention",
  "title": "Domain transfer needs attention",
  "status": 422,
  "detail": "The transfer could not be confirmed or prepared.",
  "code": "domain_transfer_needs_attention",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
