---
title: "connector_serving_not_allowlisted"
description: "This connector is not allowed to serve sites."
---

This connector is not allowed to serve sites.

**How to resolve:** Ask a team admin to add its slug to the serving allowlist.

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
  "type": "https://spacefast.com/docs/errors/connector_serving_not_allowlisted",
  "title": "Connector serving not allowlisted",
  "status": 400,
  "detail": "This connector is not allowed to serve sites.",
  "code": "connector_serving_not_allowlisted",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
