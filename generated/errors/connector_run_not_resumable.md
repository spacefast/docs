---
title: "connector_run_not_resumable"
description: "The run already settled, or its approval expired."
---

The run already settled, or its approval expired.

**How to resolve:** Submit the work again as a new run. A settled or expired run cannot be resumed.

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
  "type": "https://spacefast.com/docs/errors/connector_run_not_resumable",
  "title": "Connector run not resumable",
  "status": 400,
  "detail": "The run already settled, or its approval expired.",
  "code": "connector_run_not_resumable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
