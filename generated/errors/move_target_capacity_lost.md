---
title: "move_target_capacity_lost"
description: "The box chosen for this move lost its capacity before the move ran."
---

The box chosen for this move lost its capacity before the move ran.

**How to resolve:** Retry the move so a fresh target is selected.

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
  "type": "https://spacefast.com/docs/errors/move_target_capacity_lost",
  "title": "Move target capacity lost",
  "status": 400,
  "detail": "The box chosen for this move lost its capacity before the move ran.",
  "code": "move_target_capacity_lost",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
