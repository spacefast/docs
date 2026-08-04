---
title: "config_functions_key_removed"
description: "The sf.jsonc configuration still uses the removed top-level functions key."
---

The sf.jsonc configuration still uses the removed top-level functions key.

**How to resolve:** Replace the functions block with a runtime block: set runtime.kind to "functions" and move entry, compatibilityDate, and database under it.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/config_functions_key_removed",
  "title": "Config functions key removed",
  "status": 400,
  "detail": "The sf.jsonc configuration still uses the removed top-level functions key.",
  "code": "config_functions_key_removed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
