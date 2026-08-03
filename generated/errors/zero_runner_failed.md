---
title: "zero_runner_failed"
description: "The Zero runner process exited without a valid response."
---

The Zero runner process exited without a valid response.

**How to resolve:** Inspect runtime logs and rebuild the Zero project with the current runner.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runner_failed",
    "message": "The Zero runner process exited without a valid response.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_runner_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
