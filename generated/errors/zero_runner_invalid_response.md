---
title: "zero_runner_invalid_response"
description: "The Zero runner output was not valid JSON."
---

The Zero runner output was not valid JSON.

**How to resolve:** Inspect runner stderr and rebuild the runner if the failure persists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runner_invalid_response",
    "message": "The Zero runner output was not valid JSON.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_runner_invalid_response",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
