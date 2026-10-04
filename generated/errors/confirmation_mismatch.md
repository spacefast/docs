---
title: "confirmation_mismatch"
description: "The continuation token is bound to different action terms or a different resource revision than the request presenting it."
---

The continuation token is bound to different action terms or a different resource revision than the request presenting it.

**How to resolve:** Request a fresh confirmation for the action you actually intend to perform.

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
  "type": "https://spacefast.com/docs/errors/confirmation_mismatch",
  "title": "Confirmation mismatch",
  "status": 400,
  "detail": "The continuation token is bound to different action terms or a different resource revision than the request presenting it.",
  "code": "confirmation_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
