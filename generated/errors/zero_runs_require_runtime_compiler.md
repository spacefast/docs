---
title: "zero_runs_require_runtime_compiler"
description: "Zero run handlers require the Rust runtime compiler."
---

Zero run handlers require the Rust runtime compiler.

**How to resolve:** Install the current runtime compiler and finalize the version again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runs_require_runtime_compiler",
    "message": "Zero run handlers require the Rust runtime compiler.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_runs_require_runtime_compiler",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
