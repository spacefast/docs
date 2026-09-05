---
title: "config_runtime_entry_missing"
description: "The Space config declares a runtime but its entry file was not found."
---

The Space config declares a runtime but its entry file was not found.

**How to resolve:** Publish a directory that contains the runtime entry file, or remove `runtime` from `sf.jsonc`.

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
  "type": "https://spacefast.com/docs/errors/config_runtime_entry_missing",
  "title": "Config runtime entry missing",
  "status": 400,
  "detail": "The Space config declares a runtime but its entry file was not found.",
  "code": "config_runtime_entry_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
