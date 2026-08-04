---
title: "version_not_prepared"
description: "The version is not prepared for this operation."
---

The version is not prepared for this operation.

**How to resolve:** Complete the version's upload and finalize steps first.

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
  "type": "https://spacefast.com/docs/errors/version_not_prepared",
  "title": "Version not prepared",
  "status": 400,
  "detail": "The version is not prepared for this operation.",
  "code": "version_not_prepared",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
