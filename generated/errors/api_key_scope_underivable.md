---
title: "api_key_scope_underivable"
description: "A concrete access policy cannot be derived from the requested scope and permissions."
---

A concrete access policy cannot be derived from the requested scope and permissions.

**How to resolve:** Point scope at a resource you can already reach (an existing space owned by a team). Request only permissions your credential already has.

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
  "type": "https://spacefast.com/docs/errors/api_key_scope_underivable",
  "title": "Api key scope underivable",
  "status": 400,
  "detail": "A concrete access policy cannot be derived from the requested scope and permissions.",
  "code": "api_key_scope_underivable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
