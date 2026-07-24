---
title: "template_file_too_large"
description: "A template file exceeds the maximum size for substitution."
---

A template file exceeds the maximum size for substitution.

**How to resolve:** Keep template files under the documented size limit (16 KB).

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "template_file_too_large",
    "message": "A template file exceeds the maximum size for substitution.",
    "docsUrl": "https://spacefast.com/docs/errors/template_file_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
