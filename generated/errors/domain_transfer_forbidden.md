---
title: "domain_transfer_forbidden"
description: "Only a team owner or admin can transfer a domain away."
---

Only a team owner or admin can transfer a domain away.

**How to resolve:** Ask a team owner or admin to start the transfer, signed in as themselves.

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
  "type": "https://spacefast.com/docs/errors/domain_transfer_forbidden",
  "title": "Domain transfer forbidden",
  "status": 422,
  "detail": "Only a team owner or admin can transfer a domain away.",
  "code": "domain_transfer_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
