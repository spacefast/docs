---
title: "runtime_unauthorized"
description: "The request to the runtime carried no valid credential."
---

The request to the runtime carried no valid credential.

**How to resolve:** Send the runtime JWT in the Authorization header.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_unauthorized",
    "message": "The request to the runtime carried no valid credential.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_unauthorized",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
