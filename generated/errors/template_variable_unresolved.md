---
title: "template_variable_unresolved"
description: "A template references a variable that has no value."
---

A template references a variable that has no value.

**How to resolve:** Define the variable for the space, site, or team, or remove the reference.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "template_variable_unresolved",
    "message": "A template references a variable that has no value.",
    "docsUrl": "https://docs.spacefast.com/errors/template_variable_unresolved",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
