---
title: "resource_revision_changed"
description: "The resource changed after the revision in this request was read."
---

The resource changed after the revision in this request was read.

**How to resolve:** Reload the resource, review the current values, then retry with the fresh `expectedRevision`.

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
  "type": "https://spacefast.com/docs/errors/resource_revision_changed",
  "title": "Resource revision changed",
  "status": 400,
  "detail": "The resource changed after the revision in this request was read.",
  "code": "resource_revision_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
