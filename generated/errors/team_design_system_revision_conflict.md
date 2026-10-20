---
title: "team_design_system_revision_conflict"
description: "The team's design system changed since this action was prepared."
---

The team's design system changed since this action was prepared.

**How to resolve:** Reconcile with the current values and retry with their revision and a new operationId.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_revision_conflict",
  "title": "Team design system revision conflict",
  "status": 400,
  "detail": "The team's design system changed since this action was prepared.",
  "code": "team_design_system_revision_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
