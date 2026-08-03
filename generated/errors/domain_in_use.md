---
title: "domain_in_use"
description: "The domain is in use by another binding or assignment."
---

The domain is in use by another binding or assignment.

**How to resolve:** Remove the existing use of the domain before retrying.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_in_use",
    "message": "The domain is in use by another binding or assignment.",
    "docsUrl": "https://docs.spacefast.com/errors/domain_in_use",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
