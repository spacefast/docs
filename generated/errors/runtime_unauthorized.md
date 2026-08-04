---
title: "runtime_unauthorized"
description: "The request to the runtime carried no valid credential."
---

The request to the runtime carried no valid credential.

**How to resolve:** Send the runtime JWT in the Authorization header.

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
  "type": "https://docs.spacefast.com/docs/errors/runtime_unauthorized",
  "title": "Runtime unauthorized",
  "status": 400,
  "detail": "The request to the runtime carried no valid credential.",
  "code": "runtime_unauthorized",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
