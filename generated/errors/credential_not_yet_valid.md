---
title: "credential_not_yet_valid"
description: "The credential is not valid yet because its start time is in the future."
---

The credential is not valid yet because its start time is in the future.

**How to resolve:** Wait until the credential's notBefore time, or adjust it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "credential_not_yet_valid",
    "message": "The credential is not valid yet because its start time is in the future.",
    "docsUrl": "https://spacefast.com/docs/errors/credential_not_yet_valid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
