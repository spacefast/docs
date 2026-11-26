---
title: "connector_arg_pinned"
description: "The role pins this argument to a different value."
---

The role pins this argument to a different value.

**How to resolve:** Drop the argument or send the pinned value. Pinned values live under `connectors.<role>.args` in the config file.

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
  "type": "https://spacefast.com/docs/errors/connector_arg_pinned",
  "title": "Connector arg pinned",
  "status": 422,
  "detail": "The role pins this argument to a different value.",
  "code": "connector_arg_pinned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
