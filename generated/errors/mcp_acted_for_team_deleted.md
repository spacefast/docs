---
title: "mcp_acted_for_team_deleted"
description: "This MCP approval or execution run acted only for a team that has since been deleted, so it can no longer be approved, denied, or canceled."
---

This MCP approval or execution run acted only for a team that has since been deleted, so it can no longer be approved, denied, or canceled.

**How to resolve:** Nothing to do — the record is read-only history. Restore the deleted team within its recovery window if you still need to act on it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "mcp_acted_for_team_deleted",
    "message": "This MCP approval or execution run acted only for a team that has since been deleted, so it can no longer be approved, denied, or canceled.",
    "docsUrl": "https://docs.spacefast.com/errors/mcp_acted_for_team_deleted",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
