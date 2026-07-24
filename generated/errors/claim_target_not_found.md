---
title: "claim_target_not_found"
description: "The team or account to claim the space into was not found."
---

The team or account to claim the space into was not found.

**How to resolve:** Verify the claim target and that your credential can act for it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "claim_target_not_found",
    "message": "The team or account to claim the space into was not found.",
    "docsUrl": "https://spacefast.com/docs/errors/claim_target_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
