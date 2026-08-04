---
title: "space_has_active_publish"
description: "The space has a publish in progress, which blocks this operation."
---

The space has a publish in progress, which blocks this operation.

**How to resolve:** Wait for the publish to finish or cancel it, then retry.

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
  "type": "https://docs.spacefast.com/docs/errors/space_has_active_publish",
  "title": "Space has active publish",
  "status": 400,
  "detail": "The space has a publish in progress, which blocks this operation.",
  "code": "space_has_active_publish",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
