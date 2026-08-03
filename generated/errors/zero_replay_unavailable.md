---
title: "zero_replay_unavailable"
description: "Realtime replay is not configured for this Zero version."
---

Realtime replay is not configured for this Zero version.

**How to resolve:** Finalize the version with a Zero realtime replay URL or disable replay catch-up.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_replay_unavailable",
    "message": "Realtime replay is not configured for this Zero version.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_replay_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
