---
title: "upload_path_not_canonical"
description: "An upload path is not in canonical (decoded, NFC-normalized) form."
---

An upload path is not in canonical (decoded, NFC-normalized) form.

**How to resolve:** Send paths exactly as declared, decoded once and NFC-normalized.

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
  "type": "https://spacefast.com/docs/errors/upload_path_not_canonical",
  "title": "Upload path not canonical",
  "status": 400,
  "detail": "An upload path is not in canonical (decoded, NFC-normalized) form.",
  "code": "upload_path_not_canonical",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
