---
title: "publish_base_changed"
description: "Someone published new space settings after the base you loaded, so saving would overwrite their change."
---

Someone published new space settings after the base you loaded, so saving would overwrite their change.

**How to resolve:** Reload the latest settings, review the difference, and save again. Pass force only to overwrite deliberately.

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
  "type": "https://spacefast.com/docs/errors/publish_base_changed",
  "title": "Publish base changed",
  "status": 400,
  "detail": "Someone published new space settings after the base you loaded, so saving would overwrite their change.",
  "code": "publish_base_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
