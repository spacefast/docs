---
title: "build_oom"
description: "The build process was killed, most likely after running out of memory."
---

The build process was killed, most likely after running out of memory.

**How to resolve:** Reduce the build's memory usage or concurrency, then start a new build.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "build_oom",
    "message": "The build process was killed, most likely after running out of memory.",
    "docsUrl": "https://docs.spacefast.com/errors/build_oom",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
