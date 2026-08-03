---
title: "build_install_failed"
description: "The dependency install step failed during the build run."
---

The dependency install step failed during the build run.

**How to resolve:** Inspect the build logs for the install error, fix the lockfile or install command, and start a new build.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "build_install_failed",
    "message": "The dependency install step failed during the build run.",
    "docsUrl": "https://docs.spacefast.com/errors/build_install_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
