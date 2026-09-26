---
title: "blob_gate_token_invalid"
description: "The download token is invalid or expired."
---

The download token is invalid or expired.

**How to resolve:** Request a fresh download link and use it within its lifetime.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/blob_gate_token_invalid",
  "title": "Blob gate token invalid",
  "status": 400,
  "detail": "The download token is invalid or expired.",
  "code": "blob_gate_token_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
