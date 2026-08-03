---
title: "zero_runner_envelope_invalid"
description: "The Zero runner request envelope is malformed."
---

The Zero runner request envelope is malformed.

**How to resolve:** Use the generated runtime bridge and redeploy if generated files are stale.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runner_envelope_invalid",
    "message": "The Zero runner request envelope is malformed.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_runner_envelope_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
