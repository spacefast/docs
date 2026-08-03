---
title: "invalid_zero_realtime_replay_query"
description: "The Zero realtime replay query parameters are invalid."
---

The Zero realtime replay query parameters are invalid.

**How to resolve:** Use a valid afterEventId cursor and a numeric replay limit between 1 and 100.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_zero_realtime_replay_query",
    "message": "The Zero realtime replay query parameters are invalid.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_zero_realtime_replay_query",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
