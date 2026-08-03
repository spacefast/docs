---
title: "storage_content_blocked"
description: "The object contains executable or active web content that Zero storage does not serve."
---

The object contains executable or active web content that Zero storage does not serve.

**How to resolve:** Upload a passive file type without HTML, script, SVG, PHP, or executable bytes.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_content_blocked",
    "message": "The object contains executable or active web content that Zero storage does not serve.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_content_blocked",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
