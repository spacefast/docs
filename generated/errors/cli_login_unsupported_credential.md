---
title: "cli_login_unsupported_credential"
description: "Only a signed-in hosted MCP session can sign the CLI in."
---

Only a signed-in hosted MCP session can sign the CLI in.

**How to resolve:** Run `sf whoami`. If it reports no login, run `sf login` and approve it in the browser.

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
  "type": "https://spacefast.com/docs/errors/cli_login_unsupported_credential",
  "title": "Cli login unsupported credential",
  "status": 422,
  "detail": "Only a signed-in hosted MCP session can sign the CLI in.",
  "code": "cli_login_unsupported_credential",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
