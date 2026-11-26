---
title: "zero_config_unavailable"
description: "New zero.config.ts apps aren't available yet. A Space that already runs one keeps publishing it."
---

New zero.config.ts apps aren't available yet. A Space that already runs one keeps publishing it.

**How to resolve:** Publish a Zero app instead: start one with `sf init --runtime zero` (CLI newer than 0.9.0). If CLI or MCP 0.9.0 turned your Zero app into a zero.config.ts app, update it (`npm i -g spacefast@latest`) and publish again, or publish to an existing Space (`sf spaces create`, then `sf publish --space <spaceId>`), which 0.9.0 publishes as it is.

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
  "type": "https://spacefast.com/docs/errors/zero_config_unavailable",
  "title": "Zero config unavailable",
  "status": 422,
  "detail": "New zero.config.ts apps aren't available yet. A Space that already runs one keeps publishing it.",
  "code": "zero_config_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
