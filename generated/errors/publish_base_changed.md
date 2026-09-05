---
title: "publish_base_changed"
description: "The Space settings changed after the base digest in this request was read."
---

The Space settings changed after the base digest in this request was read.

**How to resolve:** Reload the Space, compare the settings, then save again with the fresh `baseSettingsDigest`, or send `force` to overwrite.

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
  "type": "https://spacefast.com/docs/errors/publish_base_changed",
  "title": "Publish base changed",
  "status": 400,
  "detail": "The Space settings changed after the base digest in this request was read.",
  "code": "publish_base_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
