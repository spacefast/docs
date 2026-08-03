---
title: "zero_db_target_denied"
description: "The application Zero database target is not a public TCP address."
---

The application Zero database target is not a public TCP address.

**How to resolve:** Use a public database hostname whose complete DNS answer set contains only public addresses.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_target_denied",
    "message": "The application Zero database target is not a public TCP address.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_db_target_denied",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
