---
title: "space_not_restorable"
description: "The space is past its recovery window and cannot be restored."
---

The space is past its recovery window and cannot be restored.

**How to resolve:** Publish the content to a new space.

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
  "type": "https://spacefast.com/docs/errors/space_not_restorable",
  "title": "Space not restorable",
  "status": 400,
  "detail": "The space is past its recovery window and cannot be restored.",
  "code": "space_not_restorable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
