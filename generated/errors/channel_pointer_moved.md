---
title: "channel_pointer_moved"
description: "The channel was promoted to a different version since you read it."
---

The channel was promoted to a different version since you read it.

**How to resolve:** Re-read the channel pointer and retry the promote with the current version id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "channel_pointer_moved",
    "message": "The channel was promoted to a different version since you read it.",
    "docsUrl": "https://docs.spacefast.com/errors/channel_pointer_moved",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
