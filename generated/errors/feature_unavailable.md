---
title: "feature_unavailable"
description: "This feature is not available on this deployment or plan."
---

This feature is not available on this deployment or plan.

**How to resolve:** Check the feature's availability and try again when it is enabled for your team.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "feature_unavailable",
    "message": "This feature is not available on this deployment or plan.",
    "docsUrl": "https://spacefast.com/docs/errors/feature_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
