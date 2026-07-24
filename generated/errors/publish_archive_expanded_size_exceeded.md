---
title: "publish_archive_expanded_size_exceeded"
description: "The archive expands beyond the maximum allowed total size."
---

The archive expands beyond the maximum allowed total size.

**How to resolve:** Reduce the content size.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_archive_expanded_size_exceeded",
    "message": "The archive expands beyond the maximum allowed total size.",
    "docsUrl": "https://spacefast.com/docs/errors/publish_archive_expanded_size_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
