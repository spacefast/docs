---
title: "zero_capabilities_encode_failed"
description: "The runtime cannot encode the Zero endpoint capabilities."
---

The runtime cannot encode the Zero endpoint capabilities.

**How to resolve:** Rebuild with valid capability metadata. If the failure persists, report it.

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
  "type": "https://spacefast.com/docs/errors/zero_capabilities_encode_failed",
  "title": "Zero capabilities encode failed",
  "status": 400,
  "detail": "The runtime cannot encode the Zero endpoint capabilities.",
  "code": "zero_capabilities_encode_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
