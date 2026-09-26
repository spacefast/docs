---
title: "manifest_duplicate_path"
description: "The upload manifest declares the same path more than once."
---

The upload manifest declares the same path more than once.

**How to resolve:** Deduplicate paths. Comparisons use the canonical form: decoded and NFC-normalized.

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
  "type": "https://spacefast.com/docs/errors/manifest_duplicate_path",
  "title": "Manifest duplicate path",
  "status": 400,
  "detail": "The upload manifest declares the same path more than once.",
  "code": "manifest_duplicate_path",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
