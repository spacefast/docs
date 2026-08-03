---
title: "space_disabled"
description: "The space is disabled and cannot be served or modified."
---

The space is disabled and cannot be served or modified.

**How to resolve:** Check the disabled reason on the space. It explains the path to restore it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_disabled",
    "message": "The space is disabled and cannot be served or modified.",
    "docsUrl": "https://docs.spacefast.com/errors/space_disabled",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
