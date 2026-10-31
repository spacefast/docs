---
title: "subteam_nesting_unsupported"
description: "Only a regular top-level team can have subteams. Subteams, system teams, and partner teams can't."
---

Only a regular top-level team can have subteams. Subteams, system teams, and partner teams can't.

**How to resolve:** Create the subteam under a regular top-level team. To add one next to an existing subteam, use that subteam's parent team.

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
  "type": "https://spacefast.com/docs/errors/subteam_nesting_unsupported",
  "title": "Subteam nesting unsupported",
  "status": 400,
  "detail": "Only a regular top-level team can have subteams. Subteams, system teams, and partner teams can't.",
  "code": "subteam_nesting_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
