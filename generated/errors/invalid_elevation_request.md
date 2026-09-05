---
title: "invalid_elevation_request"
description: "The elevation request is missing scopes or a usable rationale."
---

The elevation request is missing scopes or a usable rationale.

**How to resolve:** Send at least one scope and a `reason` of 1 to 1024 characters.

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
  "type": "https://spacefast.com/docs/errors/invalid_elevation_request",
  "title": "Invalid elevation request",
  "status": 400,
  "detail": "The elevation request is missing scopes or a usable rationale.",
  "code": "invalid_elevation_request",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
