---
title: "nameserver_delegation_required"
description: "This operation requires the domain to be delegated to Spacefast nameservers."
---

This operation requires the domain to be delegated to Spacefast nameservers.

**How to resolve:** Update the domain's nameservers at the registrar, then retry once delegation propagates.

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
  "type": "https://spacefast.com/docs/errors/nameserver_delegation_required",
  "title": "Nameserver delegation required",
  "status": 400,
  "detail": "This operation requires the domain to be delegated to Spacefast nameservers.",
  "code": "nameserver_delegation_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
