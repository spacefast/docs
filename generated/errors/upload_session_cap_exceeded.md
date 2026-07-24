---
title: "upload_session_cap_exceeded"
description: "The open upload session exceeded its file or byte cap."
---

The open upload session exceeded its file or byte cap.

**How to resolve:** Stay within the session caps, or declare a manifest for large publishes.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "upload_session_cap_exceeded",
    "message": "The open upload session exceeded its file or byte cap.",
    "docsUrl": "https://spacefast.com/docs/errors/upload_session_cap_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
