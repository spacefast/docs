---
title: "zero_realtime_space_required"
description: "The Zero realtime request does not identify a space."
---

The Zero realtime request does not identify a space.

**How to resolve:** Use a /spaces/{spaceId} realtime URL or include a valid spaceId query parameter.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_realtime_space_required",
    "message": "The Zero realtime request does not identify a space.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_realtime_space_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
