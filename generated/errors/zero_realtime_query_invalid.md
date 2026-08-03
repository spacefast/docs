---
title: "zero_realtime_query_invalid"
description: "The Zero realtime query subscription payload is invalid."
---

The Zero realtime query subscription payload is invalid.

**How to resolve:** Include a valid query name and argument list.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_realtime_query_invalid",
    "message": "The Zero realtime query subscription payload is invalid.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_realtime_query_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
