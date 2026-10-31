---
title: "team_knowledge_setup_required"
description: "The team has no designated context storage."
---

The team has no designated context storage.

**How to resolve:** For an authorized import or memory save, call ensureTeamContext with the teamId, then retry. It uses spaces:write to create or reuse private context storage without changing skill settings. The Memories, Skills, and Design System dashboard pages also offer Set up team context. Reads and previews do not authorize setup.

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
  "type": "https://spacefast.com/docs/errors/team_knowledge_setup_required",
  "title": "Team knowledge setup required",
  "status": 400,
  "detail": "The team has no designated context storage.",
  "code": "team_knowledge_setup_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
