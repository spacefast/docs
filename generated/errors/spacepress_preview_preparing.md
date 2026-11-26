---
title: "spacepress_preview_preparing"
description: "This preview is setting up its own database from the version's code."
---

This preview is setting up its own database from the version's code.

**How to resolve:** Retry in a few seconds. The first visit to a preview prepares it once.

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
  "type": "https://spacefast.com/docs/errors/spacepress_preview_preparing",
  "title": "Spacepress preview preparing",
  "status": 422,
  "detail": "This preview is setting up its own database from the version's code.",
  "code": "spacepress_preview_preparing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
