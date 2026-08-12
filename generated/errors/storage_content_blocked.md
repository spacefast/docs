---
title: "storage_content_blocked"
description: "The object contains executable or active web content that Spacefast storage does not serve."
---

The object contains executable or active web content that Spacefast storage does not serve.

**How to resolve:** Upload a passive file type without HTML, script, SVG, PHP, or executable bytes.

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
  "type": "https://spacefast.com/docs/errors/storage_content_blocked",
  "title": "Storage content blocked",
  "status": 400,
  "detail": "The object contains executable or active web content that Spacefast storage does not serve.",
  "code": "storage_content_blocked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
