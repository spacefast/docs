---
title: "continuation_used"
description: "This claim token was already exchanged for a durable credential."
---

This claim token was already exchanged for a durable credential.

**How to resolve:** Publish with the API key the exchange returned, or ask the Space owner to create a new one.

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
  "type": "https://spacefast.com/docs/errors/continuation_used",
  "title": "Continuation used",
  "status": 400,
  "detail": "This claim token was already exchanged for a durable credential.",
  "code": "continuation_used",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
