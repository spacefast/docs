---
title: "zero_client_bundle_not_loaded"
description: "The Zero client bundle is not loaded on this runtime."
---

The Zero client bundle is not loaded on this runtime.

**How to resolve:** Build the capsule with `sf build` so the client bundle ships with the version.

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
  "type": "https://spacefast.com/docs/errors/zero_client_bundle_not_loaded",
  "title": "Zero client bundle not loaded",
  "status": 400,
  "detail": "The Zero client bundle is not loaded on this runtime.",
  "code": "zero_client_bundle_not_loaded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
