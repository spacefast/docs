---
title: "runtime_hostname_unassigned"
description: "The hostname is not assigned to a runtime, so the request cannot be routed."
---

The hostname is not assigned to a runtime, so the request cannot be routed.

**How to resolve:** Verify the binding is active and DNS points at Spacefast.

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
  "type": "https://spacefast.com/docs/errors/runtime_hostname_unassigned",
  "title": "Runtime hostname unassigned",
  "status": 400,
  "detail": "The hostname is not assigned to a runtime, so the request cannot be routed.",
  "code": "runtime_hostname_unassigned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
