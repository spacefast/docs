---
title: "auth_code_required"
description: "A domain transfer-in was requested without the registrar authorization code."
---

A domain transfer-in was requested without the registrar authorization code.

**How to resolve:** Send the transfer authorization code from the current registrar in `authCode`.

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
  "type": "https://spacefast.com/docs/errors/auth_code_required",
  "title": "Auth code required",
  "status": 400,
  "detail": "A domain transfer-in was requested without the registrar authorization code.",
  "code": "auth_code_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
