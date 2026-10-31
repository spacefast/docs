---
title: "nameservers_required"
description: "Spacefast holds this domain's registration, so it leaves Spacefast DNS only by delegating to other nameservers."
---

Spacefast holds this domain's registration, so it leaves Spacefast DNS only by delegating to other nameservers.

**How to resolve:** Set the nameservers to delegate to with `PUT /v1/domains/{domainId}/nameservers` or `sf domains nameservers set`. That moves the domain to external DNS.

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
  "type": "https://spacefast.com/docs/errors/nameservers_required",
  "title": "Nameservers required",
  "status": 400,
  "detail": "Spacefast holds this domain's registration, so it leaves Spacefast DNS only by delegating to other nameservers.",
  "code": "nameservers_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
