---
title: "partner_tenant_immutable_client"
description: "The partner tenant's client cannot be changed after it is set."
---

The partner tenant's client cannot be changed after it is set.

**How to resolve:** Create a new partner tenant instead of changing this one's client.

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
  "type": "https://spacefast.com/docs/errors/partner_tenant_immutable_client",
  "title": "Partner tenant immutable client",
  "status": 400,
  "detail": "The partner tenant's client cannot be changed after it is set.",
  "code": "partner_tenant_immutable_client",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
