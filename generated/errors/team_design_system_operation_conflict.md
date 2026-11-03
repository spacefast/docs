---
title: "team_design_system_operation_conflict"
description: "This operation ID already names different input."
---

This operation ID already names different input.

**How to resolve:** Use the original input for a retry, or a new operationId for a new action.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_operation_conflict",
  "title": "Team design system operation conflict",
  "status": 400,
  "detail": "This operation ID already names different input.",
  "code": "team_design_system_operation_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
