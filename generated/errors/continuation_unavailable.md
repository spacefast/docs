---
title: "continuation_unavailable"
description: "This space key can no longer be exchanged for an API key."
---

This space key can no longer be exchanged for an API key.

**How to resolve:** If the space is claimed, ask its owner for an API key (dashboard: Account → API keys). If it is still unclaimed, keep using the space key as bearer auth instead of exchanging it. Still stuck? POST /v1/feedback with the error code and request id.

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
  "type": "https://spacefast.com/docs/errors/continuation_unavailable",
  "title": "Continuation unavailable",
  "status": 400,
  "detail": "This space key can no longer be exchanged for an API key.",
  "code": "continuation_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
