---
title: "template_not_in_version"
description: "The configuration names a template file the version does not contain."
---

The configuration names a template file the version does not contain.

**How to resolve:** Upload the file or remove its templates entry from sf.jsonc.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "template_not_in_version",
    "message": "The configuration names a template file the version does not contain.",
    "docsUrl": "https://docs.spacefast.com/errors/template_not_in_version",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
