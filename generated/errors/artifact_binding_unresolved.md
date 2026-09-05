---
title: "artifact_binding_unresolved"
description: "The artifact names a connection role that is not bound to a connection."
---

The artifact names a connection role that is not bound to a connection.

**How to resolve:** Bind the role: PATCH /v1/artifacts/{ref} with the role mapped to a connection id you can use.

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
  "type": "https://spacefast.com/docs/errors/artifact_binding_unresolved",
  "title": "Artifact binding unresolved",
  "status": 400,
  "detail": "The artifact names a connection role that is not bound to a connection.",
  "code": "artifact_binding_unresolved",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
