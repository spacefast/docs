---
title: "domain_transfer_active"
description: "A domain transfer or a queued DNS operation is already in flight for this domain."
---

A domain transfer or a queued DNS operation is already in flight for this domain.

**How to resolve:** Wait for the transfer and DNS operations to finish, or cancel the transfer, then retry.

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
  "type": "https://spacefast.com/docs/errors/domain_transfer_active",
  "title": "Domain transfer active",
  "status": 400,
  "detail": "A domain transfer or a queued DNS operation is already in flight for this domain.",
  "code": "domain_transfer_active",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
