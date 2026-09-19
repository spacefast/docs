---
title: "provider_privilege"
description: "WP Cloud does not grant this client permission to change the setting."
---

WP Cloud does not grant this client permission to change the setting.

**How to resolve:** Leave the provider-owned setting unchanged or contact support to request the required provider capability.

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
  "status": 400,
  "detail": "WP Cloud does not grant this client permission to change the setting.",
  "code": "provider_privilege",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
