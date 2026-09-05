---
title: "ingest_admission_exceeded"
description: "Ingest requests to this Space were shed by the admission limiter."
---

Ingest requests to this Space were shed by the admission limiter.

**How to resolve:** Retry after the seconds in the `Retry-After` header.

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
  "type": "https://spacefast.com/docs/errors/ingest_admission_exceeded",
  "title": "Ingest admission exceeded",
  "status": 400,
  "detail": "Ingest requests to this Space were shed by the admission limiter.",
  "code": "ingest_admission_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
