---
title: "auth_code_required"
description: "An authorization code is required to complete this step."
---

An authorization code is required to complete this step.

**How to resolve:** Pass the code returned by the authorization step.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "auth_code_required",
    "message": "An authorization code is required to complete this step.",
    "docsUrl": "https://spacefast.com/docs/errors/auth_code_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
