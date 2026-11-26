---
title: "share_entry_not_editable"
description: "This Share entry comes from sf.jsonc or the platform, so this API can't change it."
---

This Share entry comes from sf.jsonc or the platform, so this API can't change it.

**How to resolve:** Change it where `source.label` says it comes from, then publish again if it is config.

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
  "type": "https://spacefast.com/docs/errors/share_entry_not_editable",
  "title": "Share entry not editable",
  "status": 422,
  "detail": "This Share entry comes from sf.jsonc or the platform, so this API can't change it.",
  "code": "share_entry_not_editable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
