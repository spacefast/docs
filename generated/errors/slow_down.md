---
title: "slow_down"
description: "The device login is being polled faster than the advised interval."
---

The device login is being polled faster than the advised interval.

**How to resolve:** Increase the polling interval; aggressive polling invalidates the flow.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "slow_down",
    "message": "The device login is being polled faster than the advised interval.",
    "docsUrl": "https://spacefast.com/docs/errors/slow_down",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
