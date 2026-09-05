---
title: "connector_tool_blocked"
description: "A policy rule blocks this tool for this caller."
---

A policy rule blocks this tool for this caller.

**How to resolve:** Resolve the address against policy to see which rule decided it, then ask a team admin to change the rule or call a different tool.

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
  "type": "https://spacefast.com/docs/errors/connector_tool_blocked",
  "title": "Connector tool blocked",
  "status": 400,
  "detail": "A policy rule blocks this tool for this caller.",
  "code": "connector_tool_blocked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
