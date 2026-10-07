---
title: "invalid_decision_state"
description: "The decision record is in a state this endpoint cannot interpret."
---

The decision record is in a state this endpoint cannot interpret.

**How to resolve:** Request the action again to open a fresh decision.

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
  "detail": "The decision record is in a state this endpoint cannot interpret.",
  "code": "invalid_decision_state",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
