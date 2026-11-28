---
title: "space_identity_hostname_retained"
description: "This hostname is the deleted space's own name, so it cannot be detached on its own."
---

This hostname is the deleted space's own name, so it cannot be detached on its own.

**How to resolve:** Purge the space to retire its name, then release the retired label.

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
  "type": "https://spacefast.com/docs/errors/space_identity_hostname_retained",
  "title": "Space identity hostname retained",
  "status": 422,
  "detail": "This hostname is the deleted space's own name, so it cannot be detached on its own.",
  "code": "space_identity_hostname_retained",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
