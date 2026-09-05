---
title: "continuation_unavailable"
description: "The claim token cannot be exchanged for a durable credential."
---

The claim token cannot be exchanged for a durable credential.

**How to resolve:** Ask the Space owner to create an API key in the dashboard, then publish with `sf publish --token <api-key>`.

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
  "detail": "The claim token cannot be exchanged for a durable credential.",
  "code": "continuation_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
