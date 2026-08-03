---
title: "space_transferring"
description: "The space has a transfer in progress, which blocks this operation."
---

The space has a transfer in progress, which blocks this operation.

**How to resolve:** Complete or cancel the transfer first.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_transferring",
    "message": "The space has a transfer in progress, which blocks this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/space_transferring",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
