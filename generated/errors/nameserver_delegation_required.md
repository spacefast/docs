---
title: "nameserver_delegation_required"
description: "The domain's nameservers do not point at the managed zone yet."
---

The domain's nameservers do not point at the managed zone yet.

**How to resolve:** Set the nameservers listed in the diagnostic at the registrar; the managed zone serves once the delegation is observed.

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
  "detail": "The domain's nameservers do not point at the managed zone yet.",
  "code": "nameserver_delegation_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
