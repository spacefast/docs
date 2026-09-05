---
title: "invalid_decision_state"
description: "The confirmation decision is in a state this call cannot act on."
---

The confirmation decision is in a state this call cannot act on.

**How to resolve:** Start a new decision. If it keeps happening, contact Spacefast support with the `requestId`.

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
  "type": "https://spacefast.com/docs/errors/invalid_decision_state",
  "title": "Invalid decision state",
  "status": 400,
  "detail": "The confirmation decision is in a state this call cannot act on.",
  "code": "invalid_decision_state",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
