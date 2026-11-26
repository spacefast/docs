---
title: "connector_binding_changed"
description: "The connector role is bound to a different account than the one you allowed."
---

The connector role is bound to a different account than the one you allowed.

**How to resolve:** Read the role again with `sf connectors bindings --space <ref>`, check its account, then allow that connection.

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
  "type": "https://spacefast.com/docs/errors/connector_binding_changed",
  "title": "Connector binding changed",
  "status": 422,
  "detail": "The connector role is bound to a different account than the one you allowed.",
  "code": "connector_binding_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
