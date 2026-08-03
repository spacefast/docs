---
title: "csam_blocked"
description: "The content was blocked because it matched known child sexual abuse material."
---

The content was blocked because it matched known child sexual abuse material.

**How to resolve:** This action is final and reported as required by law. Do not retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "csam_blocked",
    "message": "The content was blocked because it matched known child sexual abuse material.",
    "docsUrl": "https://docs.spacefast.com/errors/csam_blocked",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
