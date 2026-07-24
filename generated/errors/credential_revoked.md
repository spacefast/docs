---
title: "credential_revoked"
description: "The credential used for this request was revoked."
---

The credential used for this request was revoked.

**How to resolve:** Create a new API key and update your client.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "credential_revoked",
    "message": "The credential used for this request was revoked.",
    "docsUrl": "https://spacefast.com/docs/errors/credential_revoked",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
