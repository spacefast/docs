---
title: "space_move_would_strand_zero_data"
description: "The Space runs Zero, whose database and object storage live on the site the Space is placed on. Relocating it would strand that data on the old site, so the move is refused."
---

The Space runs Zero, whose database and object storage live on the site the Space is placed on. Relocating it would strand that data on the old site, so the move is refused.

**How to resolve:** Nothing was moved and no data was lost. Migrating Zero data between sites is not implemented. Contact support if the space genuinely has to be relocated.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_move_would_strand_zero_data",
    "message": "The Space runs Zero, whose database and object storage live on the site the Space is placed on. Relocating it would strand that data on the old site, so the move is refused.",
    "docsUrl": "https://docs.spacefast.com/errors/space_move_would_strand_zero_data",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
