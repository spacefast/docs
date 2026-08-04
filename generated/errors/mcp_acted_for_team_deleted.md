---
title: "mcp_acted_for_team_deleted"
description: "This MCP approval or execution run is scoped only to a team that is now deleted. It can no longer be approved, denied, or canceled."
---

This MCP approval or execution run is scoped only to a team that is now deleted. It can no longer be approved, denied, or canceled.

**How to resolve:** Nothing to do — the record is read-only history. Restore the deleted team within its recovery window if you still need to act on it.

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
  "type": "https://spacefast.com/docs/errors/mcp_acted_for_team_deleted",
  "title": "Mcp acted for team deleted",
  "status": 400,
  "detail": "This MCP approval or execution run is scoped only to a team that is now deleted. It can no longer be approved, denied, or canceled.",
  "code": "mcp_acted_for_team_deleted",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
