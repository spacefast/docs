---
title: "space_not_archivable"
description: "The space is disabled for another reason, so it cannot be archived."
---

The space is disabled for another reason, so it cannot be archived.

**How to resolve:** Resolve the reason the space is disabled, then archive it.

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
  "type": "https://spacefast.com/docs/errors/space_not_archivable",
  "title": "Space not archivable",
  "status": 400,
  "detail": "The space is disabled for another reason, so it cannot be archived.",
  "code": "space_not_archivable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
