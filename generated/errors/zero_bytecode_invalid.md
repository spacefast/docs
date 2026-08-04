---
title: "zero_bytecode_invalid"
description: "The Zero endpoint bytecode cannot be loaded by QuickJS."
---

The Zero endpoint bytecode cannot be loaded by QuickJS.

**How to resolve:** Rebuild the project with the current Zero runner and redeploy.

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
  "type": "https://spacefast.com/docs/errors/zero_bytecode_invalid",
  "title": "Zero bytecode invalid",
  "status": 400,
  "detail": "The Zero endpoint bytecode cannot be loaded by QuickJS.",
  "code": "zero_bytecode_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
