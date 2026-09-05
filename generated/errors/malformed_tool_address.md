---
title: "malformed_tool_address"
description: "The tool address is not `<connectionId>/<tool>`."
---

The tool address is not `<connectionId>/<tool>`.

**How to resolve:** Copy an address from a tool listing rather than building one by hand.

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
  "type": "https://spacefast.com/docs/errors/malformed_tool_address",
  "title": "Malformed tool address",
  "status": 400,
  "detail": "The tool address is not `<connectionId>/<tool>`.",
  "code": "malformed_tool_address",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
