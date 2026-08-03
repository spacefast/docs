---
title: "placement_invalid_burstable"
description: "The placement burstable option was used with an unsupported placement mode."
---

The placement burstable option was used with an unsupported placement mode.

**How to resolve:** Set placement.mode to "dedicated" before setting placement.burstable, or remove the burstable option.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "placement_invalid_burstable",
    "message": "The placement burstable option was used with an unsupported placement mode.",
    "docsUrl": "https://docs.spacefast.com/errors/placement_invalid_burstable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
