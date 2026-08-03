---
title: "secret_variable_in_template"
description: "A secret variable was referenced in a template, which is blocked."
---

A secret variable was referenced in a template, which is blocked.

**How to resolve:** Templates may only substitute non-secret variables. Remove the secret reference.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "secret_variable_in_template",
    "message": "A secret variable was referenced in a template, which is blocked.",
    "docsUrl": "https://docs.spacefast.com/errors/secret_variable_in_template",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
