---
title: "continuation_unavailable"
description: "This claim token can no longer be exchanged for an access token."
---

This claim token can no longer be exchanged for an access token.

**How to resolve:** If the space is claimed, ask its owner for an access token (dashboard: Account → Access tokens). If it is still unclaimed, keep using the claim token as bearer auth instead of exchanging it. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "continuation_unavailable",
    "message": "This claim token can no longer be exchanged for an access token.",
    "docsUrl": "https://spacefast.com/docs/errors/continuation_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
