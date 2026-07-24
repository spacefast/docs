---
title: "free_headers_basic_auth_disabled"
description: "Basic-Auth via _headers is not available on the Free plan."
---

Basic-Auth via _headers is not available on the Free plan.

**How to resolve:** Use space password protection instead. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "free_headers_basic_auth_disabled",
    "message": "Basic-Auth via _headers is not available on the Free plan.",
    "docsUrl": "https://spacefast.com/docs/errors/free_headers_basic_auth_disabled",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
