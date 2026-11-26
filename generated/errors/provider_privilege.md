---
title: "provider_privilege"
description: "Spacefast's infrastructure does not allow this setting to be changed."
---

Spacefast's infrastructure does not allow this setting to be changed.

**How to resolve:** Leave this setting unchanged, or contact support to have it changed.

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
  "type": "https://spacefast.com/docs/errors/provider_privilege",
  "title": "Provider privilege",
  "status": 422,
  "detail": "Spacefast's infrastructure does not allow this setting to be changed.",
  "code": "provider_privilege",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
