---
title: "config_functions_key_removed"
description: "The Space config still sets the retired `functions` key."
---

The Space config still sets the retired `functions` key.

**How to resolve:** Delete `functions` from `sf.jsonc` and declare the server code under `runtime` instead.

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
  "type": "https://spacefast.com/docs/errors/config_functions_key_removed",
  "title": "Config functions key removed",
  "status": 400,
  "detail": "The Space config still sets the retired `functions` key.",
  "code": "config_functions_key_removed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
