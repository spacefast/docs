---
title: "hostname_contested"
description: "The hostname is already served by another site."
---

The hostname is already served by another site.

**How to resolve:** Publish under a different slug or hostname, or release the hostname at the site that holds it.

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
  "type": "https://spacefast.com/docs/errors/hostname_contested",
  "title": "Hostname contested",
  "status": 400,
  "detail": "The hostname is already served by another site.",
  "code": "hostname_contested",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
