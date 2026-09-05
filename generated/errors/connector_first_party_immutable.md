---
title: "connector_first_party_immutable"
description: "This connector is built into Spacefast and cannot be edited or removed."
---

This connector is built into Spacefast and cannot be edited or removed.

**How to resolve:** Register your own connector for the same service if you need different settings.

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
  "type": "https://spacefast.com/docs/errors/connector_first_party_immutable",
  "title": "Connector first party immutable",
  "status": 400,
  "detail": "This connector is built into Spacefast and cannot be edited or removed.",
  "code": "connector_first_party_immutable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
