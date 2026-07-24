---
title: "zero_artifact_missing"
description: "A Zero route points to an endpoint artifact that is missing."
---

A Zero route points to an endpoint artifact that is missing.

**How to resolve:** Declare the endpoint in zero_endpoints, then rebuild and publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_artifact_missing",
    "message": "A Zero route points to an endpoint artifact that is missing.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_artifact_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
