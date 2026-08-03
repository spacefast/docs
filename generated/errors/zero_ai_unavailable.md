---
title: "zero_ai_unavailable"
description: "The local Zero AI service is not configured."
---

The local Zero AI service is not configured.

**How to resolve:** Configure an AI handler in the project, then restart `sf dev` before calling the AI service.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_ai_unavailable",
    "message": "The local Zero AI service is not configured.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_ai_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
