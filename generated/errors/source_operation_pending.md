---
title: "source_operation_pending"
description: "A source workspace operation still has an uncertain provider result."
---

A source workspace operation still has an uncertain provider result.

**How to resolve:** Retry the pending operation with the same operation ID and input.

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
  "type": "https://spacefast.com/docs/errors/source_operation_pending",
  "title": "Source operation pending",
  "status": 400,
  "detail": "A source workspace operation still has an uncertain provider result.",
  "code": "source_operation_pending",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
