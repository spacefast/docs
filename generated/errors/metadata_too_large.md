---
title: "metadata_too_large"
description: "The metadata would hold more than 16 keys or 4 KB."
---

The metadata would hold more than 16 keys or 4 KB.

**How to resolve:** Delete keys you no longer need (send them as `null`) or shorten values, then try again.

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
  "type": "https://spacefast.com/docs/errors/metadata_too_large",
  "title": "Metadata too large",
  "status": 422,
  "detail": "The metadata would hold more than 16 keys or 4 KB.",
  "code": "metadata_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
