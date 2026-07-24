---
title: "theme_value_invalid"
description: "A theme value in the configuration is outside the allowed grammar."
---

A theme value in the configuration is outside the allowed grammar.

**How to resolve:** Use allowed CSS values; the offending key is dropped with a warning otherwise.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "theme_value_invalid",
    "message": "A theme value in the configuration is outside the allowed grammar.",
    "docsUrl": "https://spacefast.com/docs/errors/theme_value_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
