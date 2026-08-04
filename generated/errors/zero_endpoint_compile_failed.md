---
title: "zero_endpoint_compile_failed"
description: "The runtime could not compile the Zero endpoint bytecode."
---

The runtime could not compile the Zero endpoint bytecode.

**How to resolve:** Inspect the compile diagnostics, fix the endpoint source, and publish again.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_endpoint_compile_failed",
  "title": "Zero endpoint compile failed",
  "status": 400,
  "detail": "The runtime could not compile the Zero endpoint bytecode.",
  "code": "zero_endpoint_compile_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
