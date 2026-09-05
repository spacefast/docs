---
title: "runtime_token_expired"
description: "The runtime token is expired or not valid yet."
---

The runtime token is expired or not valid yet.

**How to resolve:** Mint a fresh runtime token and retry.

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
  "type": "https://spacefast.com/docs/errors/runtime_token_expired",
  "title": "Runtime token expired",
  "status": 400,
  "detail": "The runtime token is expired or not valid yet.",
  "code": "runtime_token_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
