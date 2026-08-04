---
title: "config_runtime_invalid_kind"
description: "The runtime block in the space configuration declares an unknown kind."
---

The runtime block in the space configuration declares an unknown kind.

**How to resolve:** Set runtime.kind to "zero" or "functions" in sf.jsonc.

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
  "type": "https://docs.spacefast.com/docs/errors/config_runtime_invalid_kind",
  "title": "Config runtime invalid kind",
  "status": 400,
  "detail": "The runtime block in the space configuration declares an unknown kind.",
  "code": "config_runtime_invalid_kind",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
