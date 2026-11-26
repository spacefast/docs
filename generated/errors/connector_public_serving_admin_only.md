---
title: "connector_public_serving_admin_only"
description: "Only team owners and admins can let a team account serve a Space anyone can open."
---

Only team owners and admins can let a team account serve a Space anyone can open.

**How to resolve:** Ask a team owner or admin. Anyone who opens a public, link or password Space can read through the account; removing that access is the other option.

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
  "type": "https://spacefast.com/docs/errors/connector_public_serving_admin_only",
  "title": "Connector public serving admin only",
  "status": 422,
  "detail": "Only team owners and admins can let a team account serve a Space anyone can open.",
  "code": "connector_public_serving_admin_only",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
