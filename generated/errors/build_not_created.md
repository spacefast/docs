---
title: "build_not_created"
description: "The build could not be created."
---

The build could not be created.

**How to resolve:** Verify the build request payload and retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "build_not_created",
    "message": "The build could not be created.",
    "docsUrl": "https://docs.spacefast.com/errors/build_not_created",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
