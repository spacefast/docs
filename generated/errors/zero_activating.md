---
title: "zero_activating"
description: "Zero endpoints are activating."
---

Zero endpoints are activating.

**How to resolve:** Wait for the dedicated runtime move to complete, then retry the request.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_activating",
    "message": "Zero endpoints are activating.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_activating",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
