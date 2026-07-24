---
title: "transfer_not_cancelable"
description: "The transfer has progressed past the point where it can be canceled."
---

The transfer has progressed past the point where it can be canceled.

**How to resolve:** Wait for the transfer to finish.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "transfer_not_cancelable",
    "message": "The transfer has progressed past the point where it can be canceled.",
    "docsUrl": "https://spacefast.com/docs/errors/transfer_not_cancelable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
