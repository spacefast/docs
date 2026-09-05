---
title: "runtime_kind_mismatch"
description: "The live version's runtime kind is not the one this operation works on."
---

The live version's runtime kind is not the one this operation works on.

**How to resolve:** Call the surface that matches the runtime, or set `runtime.kind` in `sf.jsonc` and publish.

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
  "type": "https://spacefast.com/docs/errors/runtime_kind_mismatch",
  "title": "Runtime kind mismatch",
  "status": 400,
  "detail": "The live version's runtime kind is not the one this operation works on.",
  "code": "runtime_kind_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
