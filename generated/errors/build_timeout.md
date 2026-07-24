---
title: "build_timeout"
description: "The build exceeded its time limit before producing a version."
---

The build exceeded its time limit before producing a version.

**How to resolve:** Speed up the build or raise the build timeout in the build settings, then start a new build.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "build_timeout",
    "message": "The build exceeded its time limit before producing a version.",
    "docsUrl": "https://spacefast.com/docs/errors/build_timeout",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
