---
title: "event_rate_limited"
description: "Too many event submissions came from this client in a short window."
---

Too many event submissions came from this client in a short window.

**How to resolve:** Drop or batch events. Event delivery is best-effort and never required.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "event_rate_limited",
    "message": "Too many event submissions came from this client in a short window.",
    "docsUrl": "https://docs.spacefast.com/errors/event_rate_limited",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
