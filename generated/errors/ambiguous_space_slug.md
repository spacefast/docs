---
title: "ambiguous_space_slug"
description: "The slug matches more than one Space the caller can reach."
---

The slug matches more than one Space the caller can reach.

**How to resolve:** Pass `teamRef` alongside the slug, or reference the Space by its `spc_` ID or attached hostname.

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
  "type": "https://spacefast.com/docs/errors/ambiguous_space_slug",
  "title": "Ambiguous space slug",
  "status": 400,
  "detail": "The slug matches more than one Space the caller can reach.",
  "code": "ambiguous_space_slug",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
