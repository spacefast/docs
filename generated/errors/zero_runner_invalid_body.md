---
title: "zero_runner_invalid_body"
description: "The Zero runner returned a body that is not a string or valid base64."
---

The Zero runner returned a body that is not a string or valid base64.

**How to resolve:** Return a string or bytes from the handler, then publish again.

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
  "type": "https://spacefast.com/docs/errors/zero_runner_invalid_body",
  "title": "Zero runner invalid body",
  "status": 400,
  "detail": "The Zero runner returned a body that is not a string or valid base64.",
  "code": "zero_runner_invalid_body",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
