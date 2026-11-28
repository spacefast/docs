---
title: "spacepress_preview_republish"
description: "This version was published before previews had their own database."
---

This version was published before previews had their own database.

**How to resolve:** Publish the version again to preview it. Its live site is not affected.

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
  "type": "https://spacefast.com/docs/errors/spacepress_preview_republish",
  "title": "Spacepress preview republish",
  "status": 422,
  "detail": "This version was published before previews had their own database.",
  "code": "spacepress_preview_republish",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
