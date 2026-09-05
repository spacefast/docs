---
title: "jetpack_licensing_response_invalid"
description: "The Jetpack licensing API answered with a body that does not match its contract."
---

The Jetpack licensing API answered with a body that does not match its contract.

**How to resolve:** Retry the request. If it keeps failing, contact Spacefast support with the `requestId`.

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
  "type": "https://spacefast.com/docs/errors/jetpack_licensing_response_invalid",
  "title": "Jetpack licensing response invalid",
  "status": 400,
  "detail": "The Jetpack licensing API answered with a body that does not match its contract.",
  "code": "jetpack_licensing_response_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
