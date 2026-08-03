---
title: "invalid_domain_name"
description: "The domain name is not a valid registrable hostname."
---

The domain name is not a valid registrable hostname.

**How to resolve:** Check the spelling and use a fully-qualified domain name.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_domain_name",
    "message": "The domain name is not a valid registrable hostname.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_domain_name",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
