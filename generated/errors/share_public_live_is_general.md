---
title: "share_public_live_is_general"
description: "Whole-Space public access on the live Space is general access, not an entry."
---

Whole-Space public access on the live Space is general access, not an entry.

**How to resolve:** Use `PATCH /v1/spaces/{spaceId}/share` with `general.public` or `general.level` for whole-Space public access, or pass specific `paths` on `POST /v1/spaces/{spaceId}/share/entries` to create a path-scoped public rule.

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
  "type": "https://spacefast.com/docs/errors/share_public_live_is_general",
  "title": "Share public live is general",
  "status": 422,
  "detail": "Whole-Space public access on the live Space is general access, not an entry.",
  "code": "share_public_live_is_general",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
