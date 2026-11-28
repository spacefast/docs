---
title: "zero_v2_php_uploaded"
description: "The Zero v2 publish includes a .php file. Zero v2 accepts TypeScript source only."
---

The Zero v2 publish includes a .php file. Zero v2 accepts TypeScript source only.

**How to resolve:** Remove every .php file from the project, including under public/, and publish again.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_php_uploaded",
  "title": "Zero v2 php uploaded",
  "status": 422,
  "detail": "The Zero v2 publish includes a .php file. Zero v2 accepts TypeScript source only.",
  "code": "zero_v2_php_uploaded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
