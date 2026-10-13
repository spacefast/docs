---
title: "connector_serving_admin_only"
description: "Only team owners and admins can change serving grants."
---

Only team owners and admins can change serving grants.

**How to resolve:** Ask a team owner or admin to change the grant.

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
  "type": "https://spacefast.com/docs/errors/connector_serving_admin_only",
  "title": "Connector serving admin only",
  "status": 400,
  "detail": "Only team owners and admins can change serving grants.",
  "code": "connector_serving_admin_only",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
