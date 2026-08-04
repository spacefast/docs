---
title: "runtime_api_not_found"
description: "The runtime management endpoint was not found."
---

The runtime management endpoint was not found.

**How to resolve:** Send the request with the management hostname as the Host header. Management routes are not served on public hostnames.

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
  "type": "https://docs.spacefast.com/docs/errors/runtime_api_not_found",
  "title": "Runtime api not found",
  "status": 400,
  "detail": "The runtime management endpoint was not found.",
  "code": "runtime_api_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
