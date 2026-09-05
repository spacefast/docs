---
title: "provider_error"
description: "An upstream provider failed while serving this request."
---

An upstream provider failed while serving this request.

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
  "type": "https://spacefast.com/docs/errors/provider_error",
  "title": "Provider error",
  "status": 400,
  "detail": "An upstream provider failed while serving this request.",
  "code": "provider_error",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
