---
title: "device_verification_rate_limited"
description: "Too many device verification attempts came from this caller."
---

Too many device verification attempts came from this caller.

**How to resolve:** Wait for the window in the `Retry-After` header to pass, then verify again.

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
  "type": "https://spacefast.com/docs/errors/device_verification_rate_limited",
  "title": "Device verification rate limited",
  "status": 400,
  "detail": "Too many device verification attempts came from this caller.",
  "code": "device_verification_rate_limited",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
