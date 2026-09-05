---
title: "zero_blob_value_invalid"
description: "The blob value is neither bytes nor a string."
---

The blob value is neither bytes nor a string.

**How to resolve:** Pass a string, `ArrayBuffer`, or `Uint8Array` as the blob value.

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
  "type": "https://spacefast.com/docs/errors/zero_blob_value_invalid",
  "title": "Zero blob value invalid",
  "status": 400,
  "detail": "The blob value is neither bytes nor a string.",
  "code": "zero_blob_value_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
