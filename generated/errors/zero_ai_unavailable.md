---
title: "zero_ai_unavailable"
description: "The local Zero AI service is not configured."
---

The local Zero AI service is not configured.

**How to resolve:** Configure an AI handler in the project, then restart `sf dev` before calling the AI service.

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
  "type": "https://spacefast.com/docs/errors/zero_ai_unavailable",
  "title": "Zero ai unavailable",
  "status": 400,
  "detail": "The local Zero AI service is not configured.",
  "code": "zero_ai_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
