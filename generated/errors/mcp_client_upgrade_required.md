---
title: "mcp_client_upgrade_required"
description: "This On-Device Spacefast MCP server is too old to show this result accurately, so the call returned nothing rather than a wrong answer."
---

This On-Device Spacefast MCP server is too old to show this result accurately, so the call returned nothing rather than a wrong answer.

**How to resolve:** Run `npm install -g spacefast@latest`, or point the MCP client at `npx -y spacefast@latest mcp`, restart the MCP server, then try again.

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
  "type": "https://spacefast.com/docs/errors/mcp_client_upgrade_required",
  "title": "Mcp client upgrade required",
  "status": 422,
  "detail": "This On-Device Spacefast MCP server is too old to show this result accurately, so the call returned nothing rather than a wrong answer.",
  "code": "mcp_client_upgrade_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
