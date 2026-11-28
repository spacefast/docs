---
title: "zero_connector_roles_move"
description: "This Zero 0.8 app declares connector roles in capsule({ connectors }). Connector roles now belong in spacefast.config.ts."
---

This Zero 0.8 app declares connector roles in capsule({ connectors }). Connector roles now belong in spacefast.config.ts.

**How to resolve:** Paste `details.config` into spacefast.config.ts. It keeps each role's connector, kind, tools, pins and cache. Once the config declares them, remove those app bundle entries.

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
  "type": "https://spacefast.com/docs/errors/zero_connector_roles_move",
  "title": "Zero connector roles move",
  "status": 422,
  "detail": "This Zero 0.8 app declares connector roles in capsule({ connectors }). Connector roles now belong in spacefast.config.ts.",
  "code": "zero_connector_roles_move",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
