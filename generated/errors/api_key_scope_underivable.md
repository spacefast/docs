---
title: "api_key_scope_underivable"
description: "The requested scope and permissions do not resolve to a concrete access policy."
---

The requested scope and permissions do not resolve to a concrete access policy.

**How to resolve:** Set `scope` to a team-owned Space the caller can already reach, and keep it in the key's existing owning team and collection.

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
  "detail": "The requested scope and permissions do not resolve to a concrete access policy.",
  "code": "api_key_scope_underivable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
