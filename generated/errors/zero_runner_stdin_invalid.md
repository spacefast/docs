---
title: "zero_runner_stdin_invalid"
description: "The Zero runner could not read its request envelope."
---

The Zero runner could not read its request envelope.

**How to resolve:** Retry. Report the runtime bridge failure if it persists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runner_stdin_invalid",
    "message": "The Zero runner could not read its request envelope.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_runner_stdin_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
