---
title: "theme_value_invalid"
description: "A theme value in the configuration is outside the allowed grammar."
---

A theme value in the configuration is outside the allowed grammar.

**How to resolve:** Use allowed CSS values. The offending key is dropped with a warning otherwise.

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
  "type": "https://spacefast.com/docs/errors/theme_value_invalid",
  "title": "Theme value invalid",
  "status": 400,
  "detail": "A theme value in the configuration is outside the allowed grammar.",
  "code": "theme_value_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
