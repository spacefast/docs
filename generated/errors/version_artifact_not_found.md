---
title: "version_artifact_not_found"
description: "The requested version artifact was not found."
---

The requested version artifact was not found.

**How to resolve:** List the version's convention artifacts to see what exists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_artifact_not_found",
    "message": "The requested version artifact was not found.",
    "docsUrl": "https://docs.spacefast.com/errors/version_artifact_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
