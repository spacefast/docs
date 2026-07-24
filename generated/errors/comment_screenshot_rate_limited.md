---
title: "comment_screenshot_rate_limited"
description: "Too many anonymous comment screenshot uploads were attempted."
---

Too many anonymous comment screenshot uploads were attempted.

**How to resolve:** Wait for the one-minute window to reset, then retry the screenshot upload.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "comment_screenshot_rate_limited",
    "message": "Too many anonymous comment screenshot uploads were attempted.",
    "docsUrl": "https://spacefast.com/docs/errors/comment_screenshot_rate_limited",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
