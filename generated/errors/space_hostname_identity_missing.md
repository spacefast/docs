---
title: "space_hostname_identity_missing"
description: "The space is missing its persisted default hostname identity."
---

The space is missing its persisted default hostname identity.

**How to resolve:** Contact support. Retrying cannot safely recreate a permanent hostname identity.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/space_hostname_identity_missing",
  "title": "Space hostname identity missing",
  "status": 400,
  "detail": "The space is missing its persisted default hostname identity.",
  "code": "space_hostname_identity_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
