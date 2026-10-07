---
title: "connector_program_failed"
description: "The connector program failed during execution."
---

The connector program failed during execution.

**How to resolve:** Read the error detail, correct the program or its inputs, and submit a new run.

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
  "type": "https://spacefast.com/docs/errors/connector_program_failed",
  "title": "Connector program failed",
  "status": 400,
  "detail": "The connector program failed during execution.",
  "code": "connector_program_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
