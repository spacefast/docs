---
title: "queue_not_found"
description: "The named job queue does not exist."
---

The named job queue does not exist.

**How to resolve:** Check the queue name against the operator queue list.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "queue_not_found",
    "message": "The named job queue does not exist.",
    "docsUrl": "https://docs.spacefast.com/errors/queue_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
