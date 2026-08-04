---
title: "space_move_would_strand_zero_data"
description: "The Space runs Zero, whose database and object storage live on the site the Space is placed on. Relocating it would strand that data on the old site, so the move is refused."
---

The Space runs Zero, whose database and object storage live on the site the Space is placed on. Relocating it would strand that data on the old site, so the move is refused.

**How to resolve:** Nothing was moved and no data was lost. Migrating Zero data between sites is not implemented. Contact support if the space genuinely has to be relocated.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/space_move_would_strand_zero_data",
  "title": "Space move would strand zero data",
  "status": 400,
  "detail": "The Space runs Zero, whose database and object storage live on the site the Space is placed on. Relocating it would strand that data on the old site, so the move is refused.",
  "code": "space_move_would_strand_zero_data",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
