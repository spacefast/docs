---
title: "resource_busy"
description: "Another request was still changing the same resource, so this one could not take its turn in time."
---

Another request was still changing the same resource, so this one could not take its turn in time.

**How to resolve:** Nothing in your request needs to change. Wait for the `Retry-After` interval and send it again.

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
  "type": "https://spacefast.com/docs/errors/resource_busy",
  "title": "Resource busy",
  "status": 422,
  "detail": "Another request was still changing the same resource, so this one could not take its turn in time.",
  "code": "resource_busy",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
