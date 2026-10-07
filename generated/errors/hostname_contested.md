---
title: "hostname_contested"
description: "The hostname this Space would serve on is already attached to a different site."
---

The hostname this Space would serve on is already attached to a different site.

**How to resolve:** Publish under a different slug. If the hostname should belong to this Space, free it at the provider first.

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
  "detail": "The hostname this Space would serve on is already attached to a different site.",
  "code": "hostname_contested",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
