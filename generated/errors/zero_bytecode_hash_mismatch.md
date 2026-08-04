---
title: "zero_bytecode_hash_mismatch"
description: "The Zero endpoint bytecode hash does not match its artifact metadata."
---

The Zero endpoint bytecode hash does not match its artifact metadata.

**How to resolve:** Rebuild and republish so bytecode and endpoint metadata are from the same build.

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
  "type": "https://spacefast.com/docs/errors/zero_bytecode_hash_mismatch",
  "title": "Zero bytecode hash mismatch",
  "status": 400,
  "detail": "The Zero endpoint bytecode hash does not match its artifact metadata.",
  "code": "zero_bytecode_hash_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
