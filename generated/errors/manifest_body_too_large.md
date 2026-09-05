---
title: "manifest_body_too_large"
description: "The manifest request body is larger than the byte cap."
---

The manifest request body is larger than the byte cap.

**How to resolve:** Split the manifest across several requests so each body fits the cap.

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
  "type": "https://spacefast.com/docs/errors/manifest_body_too_large",
  "title": "Manifest body too large",
  "status": 400,
  "detail": "The manifest request body is larger than the byte cap.",
  "code": "manifest_body_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
