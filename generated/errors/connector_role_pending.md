---
title: "connector_role_pending"
description: "A connector role the live version declares cannot serve yet."
---

A connector role the live version declares cannot serve yet.

**How to resolve:** `details.state` says what it needs: bind a connection, turn on site serving, let a team role serve a public Space (`sf connectors public-serving set <role> --enable`, team owners and admins), or nothing for a visitor role. Run `sf connectors bindings --space <ref>`.

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
  "type": "https://spacefast.com/docs/errors/connector_role_pending",
  "title": "Connector role pending",
  "status": 422,
  "detail": "A connector role the live version declares cannot serve yet.",
  "code": "connector_role_pending",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
