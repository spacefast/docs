---
title: "build_failed"
description: "The build run failed before producing a version."
---

The build run failed before producing a version.

**How to resolve:** Inspect the build logs, fix the failure, and start a new build.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "build_failed",
    "message": "The build run failed before producing a version.",
    "docsUrl": "https://spacefast.com/docs/errors/build_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
