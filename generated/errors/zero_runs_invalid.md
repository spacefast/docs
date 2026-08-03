---
title: "zero_runs_invalid"
description: "The Zero run-handler payload is invalid."
---

The Zero run-handler payload is invalid.

**How to resolve:** Send a valid array of generated run handlers and publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runs_invalid",
    "message": "The Zero run-handler payload is invalid.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_runs_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
