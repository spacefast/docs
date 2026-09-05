---
title: "publish_config_unsupported"
description: "The publish declares a config this endpoint does not accept."
---

The publish declares a config this endpoint does not accept.

**How to resolve:** Remove the unsupported keys from `sf.jsonc`, then publish again.

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
  "type": "https://spacefast.com/docs/errors/publish_config_unsupported",
  "title": "Publish config unsupported",
  "status": 400,
  "detail": "The publish declares a config this endpoint does not accept.",
  "code": "publish_config_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
