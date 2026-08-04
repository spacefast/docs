---
title: "site_not_static"
description: "This operation only applies to static-runtime sites."
---

This operation only applies to static-runtime sites.

**How to resolve:** Target a static-runtime site.

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
  "type": "https://spacefast.com/docs/errors/site_not_static",
  "title": "Site not static",
  "status": 400,
  "detail": "This operation only applies to static-runtime sites.",
  "code": "site_not_static",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
