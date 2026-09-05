---
title: "runtime_hostname_unassigned"
description: "The Space has no runtime hostname assigned yet."
---

The Space has no runtime hostname assigned yet.

**How to resolve:** Publish the Space once, then retry after it has a live hostname.

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
  "type": "https://spacefast.com/docs/errors/runtime_hostname_unassigned",
  "title": "Runtime hostname unassigned",
  "status": 400,
  "detail": "The Space has no runtime hostname assigned yet.",
  "code": "runtime_hostname_unassigned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
