---
title: "team_knowledge_storage_unavailable"
description: "The designated system Space cannot serve team context."
---

The designated system Space cannot serve team context.

**How to resolve:** Check that the system Space still belongs to this team and is available, then retry. Existing designations are preserved.

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
  "status": 400,
  "detail": "The designated system Space cannot serve team context.",
  "code": "team_knowledge_storage_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
