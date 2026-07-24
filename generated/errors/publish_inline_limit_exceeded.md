---
title: "publish_inline_limit_exceeded"
description: "The inline publish exceeds the file-count or total-size limit."
---

The inline publish exceeds the file-count or total-size limit.

**How to resolve:** Trim the inline payload, or switch to an upload-based publish for larger content.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_inline_limit_exceeded",
    "message": "The inline publish exceeds the file-count or total-size limit.",
    "docsUrl": "https://spacefast.com/docs/errors/publish_inline_limit_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
