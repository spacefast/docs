---
title: "template_not_in_version"
description: "A `templates` entry names a file this version does not publish, so it was skipped."
---

A `templates` entry names a file this version does not publish, so it was skipped.

**How to resolve:** Publish the file, or remove the entry from `templates` in `sf.jsonc`.

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
  "type": "https://spacefast.com/docs/errors/template_not_in_version",
  "title": "Template not in version",
  "status": 400,
  "detail": "A `templates` entry names a file this version does not publish, so it was skipped.",
  "code": "template_not_in_version",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
