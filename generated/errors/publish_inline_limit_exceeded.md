---
title: "publish_inline_limit_exceeded"
description: "The publish is past the limits for an inline publish."
---

The publish is past the limits for an inline publish.

**How to resolve:** Publish through an upload session instead of inline.

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
  "type": "https://spacefast.com/docs/errors/publish_inline_limit_exceeded",
  "title": "Publish inline limit exceeded",
  "status": 400,
  "detail": "The publish is past the limits for an inline publish.",
  "code": "publish_inline_limit_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
