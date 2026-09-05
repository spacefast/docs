---
title: "space_hostname_identity_missing"
description: "The Space has no persisted default hostname identity."
---

The Space has no persisted default hostname identity.

**How to resolve:** Contact Spacefast support with the Space ID and the `requestId`.

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
  "type": "https://spacefast.com/docs/errors/space_hostname_identity_missing",
  "title": "Space hostname identity missing",
  "status": 400,
  "detail": "The Space has no persisted default hostname identity.",
  "code": "space_hostname_identity_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
