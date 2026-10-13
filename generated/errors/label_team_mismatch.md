---
title: "label_team_mismatch"
description: "The label belongs to a different team than the space."
---

The label belongs to a different team than the space.

**How to resolve:** Use a label from the space's own team, or create one there first.

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
  "type": "https://spacefast.com/docs/errors/label_team_mismatch",
  "title": "Label team mismatch",
  "status": 400,
  "detail": "The label belongs to a different team than the space.",
  "code": "label_team_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
