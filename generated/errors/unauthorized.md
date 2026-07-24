---
title: "unauthorized"
description: "The request carried no valid credential."
---

The request carried no valid credential.

**How to resolve:** Send a bearer access token, use an agent OAuth client, or sign in.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "unauthorized",
    "message": "The request carried no valid credential.",
    "docsUrl": "https://spacefast.com/docs/errors/unauthorized",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
