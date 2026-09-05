---
title: "token_type_invalid"
description: "The partner token's `typ` header is not the expected token type."
---

The partner token's `typ` header is not the expected token type.

**How to resolve:** Mint the token with the `typ` the partner token contract requires.

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
  "type": "https://spacefast.com/docs/errors/token_type_invalid",
  "title": "Token type invalid",
  "status": 400,
  "detail": "The partner token's `typ` header is not the expected token type.",
  "code": "token_type_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
