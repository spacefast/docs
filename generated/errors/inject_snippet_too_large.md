---
title: "inject_snippet_too_large"
description: "An inject snippet exceeds the per-snippet size limit."
---

An inject snippet exceeds the per-snippet size limit.

**How to resolve:** Keep each inject snippet at or under 8 KB.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "inject_snippet_too_large",
    "message": "An inject snippet exceeds the per-snippet size limit.",
    "docsUrl": "https://docs.spacefast.com/errors/inject_snippet_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
