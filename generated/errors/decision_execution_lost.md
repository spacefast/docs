---
title: "decision_execution_lost"
description: "The approved action's execution lease is no longer held, so its result cannot be recorded."
---

The approved action's execution lease is no longer held, so its result cannot be recorded.

**How to resolve:** Poll the continuation to read the decision's current state before requesting the action again.

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
  "type": "https://spacefast.com/docs/errors/decision_execution_lost",
  "title": "Decision execution lost",
  "status": 400,
  "detail": "The approved action's execution lease is no longer held, so its result cannot be recorded.",
  "code": "decision_execution_lost",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
