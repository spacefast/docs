---
title: "zero_v2_output_uploaded"
description: "The publish uploads a .zero-compiled/ directory, which only the host writes."
---

The publish uploads a .zero-compiled/ directory, which only the host writes.

**How to resolve:** Remove .zero-compiled/ from the upload and publish the project source. The host compiles it.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_output_uploaded",
  "title": "Zero v2 output uploaded",
  "status": 422,
  "detail": "The publish uploads a .zero-compiled/ directory, which only the host writes.",
  "code": "zero_v2_output_uploaded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
