---
title: "slug_invalid"
description: "The slug does not meet the structural rules for managed names."
---

The slug does not meet the structural rules for managed names.

**How to resolve:** Use lowercase letters, numbers, and single dashes within the allowed length. The error message identifies the failed rule.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "slug_invalid",
    "message": "The slug does not meet the structural rules for managed names.",
    "docsUrl": "https://docs.spacefast.com/errors/slug_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
