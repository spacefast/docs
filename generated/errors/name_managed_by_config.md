---
title: "name_managed_by_config"
description: "The space name is managed by sf.jsonc while its live version declares one."
---

The space name is managed by sf.jsonc while its live version declares one.

**How to resolve:** Change name in sf.jsonc and publish, or remove name from the file to rename the space through the API.

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
  "type": "https://spacefast.com/docs/errors/name_managed_by_config",
  "title": "Name managed by config",
  "status": 400,
  "detail": "The space name is managed by sf.jsonc while its live version declares one.",
  "code": "name_managed_by_config",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
