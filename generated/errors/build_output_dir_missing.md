---
title: "build_output_dir_missing"
description: "The build finished but its output directory was not produced."
---

The build finished but its output directory was not produced.

**How to resolve:** Point the output directory setting at the folder your build writes (for example dist, build, out, or public).

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "build_output_dir_missing",
    "message": "The build finished but its output directory was not produced.",
    "docsUrl": "https://spacefast.com/docs/errors/build_output_dir_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
