---
title: "zero_replay_failed"
description: "The hosted Zero runtime could not fetch realtime replay events."
---

The hosted Zero runtime could not fetch realtime replay events.

**How to resolve:** Retry shortly. Check the central realtime and control-plane logs if it persists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_replay_failed",
    "message": "The hosted Zero runtime could not fetch realtime replay events.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_replay_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
