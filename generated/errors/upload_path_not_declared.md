---
title: "upload_path_not_declared"
description: "An uploaded path was not declared in the version's manifest."
---

An uploaded path was not declared in the version's manifest.

**How to resolve:** Declare every path up front.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "upload_path_not_declared",
    "message": "An uploaded path was not declared in the version's manifest.",
    "docsUrl": "https://docs.spacefast.com/errors/upload_path_not_declared",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
