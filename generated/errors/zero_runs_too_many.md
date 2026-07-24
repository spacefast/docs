---
title: "zero_runs_too_many"
description: "The Zero run-handler payload exceeds the supported handler count."
---

The Zero run-handler payload exceeds the supported handler count.

**How to resolve:** Reduce the project to at most 128 Zero run handlers, then publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runs_too_many",
    "message": "The Zero run-handler payload exceeds the supported handler count.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_runs_too_many",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
