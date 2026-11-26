---
title: "connector_role_connector_mismatch"
description: "The connection is for a different connector than the role declares."
---

The connection is for a different connector than the role declares.

**How to resolve:** Choose a connection of the connector named in `connectors.<role>.connector`.

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
  "type": "https://spacefast.com/docs/errors/connector_role_connector_mismatch",
  "title": "Connector role connector mismatch",
  "status": 422,
  "detail": "The connection is for a different connector than the role declares.",
  "code": "connector_role_connector_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
