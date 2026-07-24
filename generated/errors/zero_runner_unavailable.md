---
title: "zero_runner_unavailable"
description: "The Zero runner process could not be started."
---

The Zero runner process could not be started.

**How to resolve:** Verify the runner binary is installed and executable in the runtime.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runner_unavailable",
    "message": "The Zero runner process could not be started.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_runner_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
