---
title: "mcp_acted_for_team_deleted"
description: "This MCP approval or execution run acted only for a team that has since been deleted, so it can no longer be approved, denied, or canceled."
---

This MCP approval or execution run acted only for a team that has since been deleted, so it can no longer be approved, denied, or canceled.

**How to resolve:** Nothing to do — the record is read-only history. Restore the deleted team within its recovery window if you still need to act on it.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/mcp_acted_for_team_deleted",
  "title": "Mcp acted for team deleted",
  "status": 400,
  "detail": "This MCP approval or execution run acted only for a team that has since been deleted, so it can no longer be approved, denied, or canceled.",
  "code": "mcp_acted_for_team_deleted",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
