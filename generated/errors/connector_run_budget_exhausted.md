---
title: "connector_run_budget_exhausted"
description: "The run hit its tool-call, egress, or time budget and stopped."
---

The run hit its tool-call, egress, or time budget and stopped.

**How to resolve:** Narrow the work and run it again — fewer tool calls, or a smaller page of results per call.

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
  "type": "https://spacefast.com/docs/errors/connector_run_budget_exhausted",
  "title": "Connector run budget exhausted",
  "status": 400,
  "detail": "The run hit its tool-call, egress, or time budget and stopped.",
  "code": "connector_run_budget_exhausted",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
