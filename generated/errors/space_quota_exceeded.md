---
title: "space_quota_exceeded"
description: "Creating or claiming this space would exceed the owner's space allowance."
---

Creating or claiming this space would exceed the owner's space allowance.

**How to resolve:** Delete a space you no longer need, then retry. If you are still stuck, POST /v1/feedback with the error code and requestId.

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
  "type": "https://spacefast.com/docs/errors/space_quota_exceeded",
  "title": "Space quota exceeded",
  "status": 400,
  "detail": "Creating or claiming this space would exceed the owner's space allowance.",
  "code": "space_quota_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
