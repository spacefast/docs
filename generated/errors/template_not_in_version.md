---
title: "template_not_in_version"
description: "The configuration names a template file the version does not contain."
---

The configuration names a template file the version does not contain.

**How to resolve:** Upload the file or remove its templates entry from sf.jsonc.

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
  "detail": "The configuration names a template file the version does not contain.",
  "code": "template_not_in_version",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
