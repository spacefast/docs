---
title: "move_target_capacity_lost"
description: "The selected move target no longer has capacity for the space."
---

The selected move target no longer has capacity for the space.

**How to resolve:** Retry the move with a different target or after capacity is freed.

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
  "type": "https://spacefast.com/docs/errors/move_target_capacity_lost",
  "title": "Move target capacity lost",
  "status": 400,
  "detail": "The selected move target no longer has capacity for the space.",
  "code": "move_target_capacity_lost",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
