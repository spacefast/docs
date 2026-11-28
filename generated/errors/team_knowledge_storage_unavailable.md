---
title: "team_knowledge_storage_unavailable"
description: "The Space that stores the team's context is archived, removed, or no longer in the team."
---

The Space that stores the team's context is archived, removed, or no longer in the team.

**How to resolve:** Retrying returns the same answer. Ask a team owner to restore the Space in details.systemSpaceId: restoreSpace brings back an archived one, and support restores a removed one. Its content is kept and is never replaced automatically.

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
  "type": "https://spacefast.com/docs/errors/team_knowledge_storage_unavailable",
  "title": "Team knowledge storage unavailable",
  "status": 422,
  "detail": "The Space that stores the team's context is archived, removed, or no longer in the team.",
  "code": "team_knowledge_storage_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
