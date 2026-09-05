---
title: "source_resolution_invalid"
description: "The resolution contains duplicate paths or paths outside the current conflicts."
---

The resolution contains duplicate paths or paths outside the current conflicts.

**How to resolve:** Read the current conflicts and resolve each selected path once.

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
  "type": "https://spacefast.com/docs/errors/source_resolution_invalid",
  "title": "Source resolution invalid",
  "status": 400,
  "detail": "The resolution contains duplicate paths or paths outside the current conflicts.",
  "code": "source_resolution_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
