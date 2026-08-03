---
title: "event_payload_too_large"
description: "The event payload exceeds the maximum size."
---

The event payload exceeds the maximum size.

**How to resolve:** Send smaller batches.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "event_payload_too_large",
    "message": "The event payload exceeds the maximum size.",
    "docsUrl": "https://docs.spacefast.com/errors/event_payload_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
