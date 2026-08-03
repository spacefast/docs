---
title: "path_case_collision"
description: "Two file paths differ only by letter case, which collides on serving."
---

Two file paths differ only by letter case, which collides on serving.

**How to resolve:** Rename one of the files so paths are unique case-insensitively.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "path_case_collision",
    "message": "Two file paths differ only by letter case, which collides on serving.",
    "docsUrl": "https://docs.spacefast.com/errors/path_case_collision",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
