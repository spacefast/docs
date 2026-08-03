---
title: "build_command_missing"
description: "A build or install command could not be found during the build run."
---

A build or install command could not be found during the build run.

**How to resolve:** Check the command spelling and ensure its tool is declared in package.json or available in the build image.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "build_command_missing",
    "message": "A build or install command could not be found during the build run.",
    "docsUrl": "https://docs.spacefast.com/errors/build_command_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
