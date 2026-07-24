---
title: "unsupported_publish_media_type"
description: "The publish content-type is not supported."
---

The publish content-type is not supported.

**How to resolve:** Send JSON, multipart form data, or a zip archive.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "unsupported_publish_media_type",
    "message": "The publish content-type is not supported.",
    "docsUrl": "https://spacefast.com/docs/errors/unsupported_publish_media_type",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
