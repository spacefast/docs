---
title: "platform_tenant_immutable_client"
description: "The tenant's provider client cannot be changed."
---

The tenant's provider client cannot be changed.

**How to resolve:** Create a new tenant with the desired provider client instead.

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
  "type": "https://spacefast.com/docs/errors/platform_tenant_immutable_client",
  "title": "Platform tenant immutable client",
  "status": 400,
  "detail": "The tenant's provider client cannot be changed.",
  "code": "platform_tenant_immutable_client",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
