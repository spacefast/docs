---
title: "team_design_system_undo_conflict"
description: "The requested action is no longer the latest design-system action."
---

The requested action is no longer the latest design-system action.

**How to resolve:** Only undo the current last action, with its actionId and current expectedRevision.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_undo_conflict",
  "title": "Team design system undo conflict",
  "status": 400,
  "detail": "The requested action is no longer the latest design-system action.",
  "code": "team_design_system_undo_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
