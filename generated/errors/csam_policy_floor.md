---
title: "csam_policy_floor"
description: "CSAM enforcement policy cannot be set below the mandatory account-suspend floor."
---

CSAM enforcement policy cannot be set below the mandatory account-suspend floor.

**How to resolve:** Set the CSAM category enforcement tier to account suspension.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "csam_policy_floor",
    "message": "CSAM enforcement policy cannot be set below the mandatory account-suspend floor.",
    "docsUrl": "https://docs.spacefast.com/errors/csam_policy_floor",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
