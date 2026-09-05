---
title: "source_operation_reused"
description: "The operation ID was already used with different source input."
---

The operation ID was already used with different source input.

**How to resolve:** Use a new operation ID for the changed request.

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
  "type": "https://spacefast.com/docs/errors/source_operation_reused",
  "title": "Source operation reused",
  "status": 400,
  "detail": "The operation ID was already used with different source input.",
  "code": "source_operation_reused",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
