---
title: "invalid_token"
description: "The session token is expired or does not authorize this interface."
---

The session token is expired or does not authorize this interface.

**How to resolve:** Renew the session token. Use DPoP for the Spacefast API and a Bearer token issued for the MCP resource for MCP.

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
  "type": "https://spacefast.com/docs/errors/invalid_token",
  "title": "Invalid token",
  "status": 400,
  "detail": "The session token is expired or does not authorize this interface.",
  "code": "invalid_token",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
