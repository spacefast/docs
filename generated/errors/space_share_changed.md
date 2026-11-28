---
title: "space_share_changed"
description: "Sharing changed after you loaded it, so the stale write was refused."
---

Sharing changed after you loaded it, so the stale write was refused.

**How to resolve:** Read `GET /v1/spaces/{spaceId}/share` (or use `error.details.current`), reapply your change, and send its `revision` as `expectedRevision`.

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
  "type": "https://spacefast.com/docs/errors/space_share_changed",
  "title": "Space share changed",
  "status": 422,
  "detail": "Sharing changed after you loaded it, so the stale write was refused.",
  "code": "space_share_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
