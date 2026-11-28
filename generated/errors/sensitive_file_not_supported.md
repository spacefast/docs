---
title: "sensitive_file_not_supported"
description: "A sensitive credential, private key, agent config, or repository metadata file (such as `.env`, `.mcp.json`, `.claude/`, `.git/`, `.ssh/`, or `*.pem`) cannot be published."
---

A sensitive credential, private key, agent config, or repository metadata file (such as `.env`, `.mcp.json`, `.claude/`, `.git/`, `.ssh/`, or `*.pem`) cannot be published.

**How to resolve:** Remove the sensitive file from your upload directory (or publish only your build output directory; use `.env.example` for templates, Spacefast Secrets via `sf env set NAME --value-from-stdin`, Space Variables in the dashboard, or `.env.server` for runtime Spaces, and `--no-secret` for non-secret variables), then publish again.

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
  "type": "https://spacefast.com/docs/errors/sensitive_file_not_supported",
  "title": "Sensitive file not supported",
  "status": 422,
  "detail": "A sensitive credential, private key, agent config, or repository metadata file (such as `.env`, `.mcp.json`, `.claude/`, `.git/`, `.ssh/`, or `*.pem`) cannot be published.",
  "code": "sensitive_file_not_supported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
