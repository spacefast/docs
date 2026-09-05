---
title: "zero_endpoint_index_invalid"
description: "The compiled Zero endpoint index does not satisfy its schema."
---

The compiled Zero endpoint index does not satisfy its schema.

**How to resolve:** Rebuild the capsule with `sf build`, then publish again.

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
  "type": "https://spacefast.com/docs/errors/zero_endpoint_index_invalid",
  "title": "Zero endpoint index invalid",
  "status": 400,
  "detail": "The compiled Zero endpoint index does not satisfy its schema.",
  "code": "zero_endpoint_index_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
