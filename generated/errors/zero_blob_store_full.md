---
title: "zero_blob_store_full"
description: "The local Zero blob store reached its configured size limit."
---

The local Zero blob store reached its configured size limit.

**How to resolve:** Delete local blobs or raise the dev blob store limit.

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
  "type": "https://spacefast.com/docs/errors/zero_blob_store_full",
  "title": "Zero blob store full",
  "status": 400,
  "detail": "The local Zero blob store reached its configured size limit.",
  "code": "zero_blob_store_full",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
