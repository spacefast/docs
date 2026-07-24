---
title: "config_templates_over_limit"
description: "The configuration declares more template files than the plan allows."
---

The configuration declares more template files than the plan allows.

**How to resolve:** Reduce the number of template entries in sf.jsonc. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "config_templates_over_limit",
    "message": "The configuration declares more template files than the plan allows.",
    "docsUrl": "https://spacefast.com/docs/errors/config_templates_over_limit",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
