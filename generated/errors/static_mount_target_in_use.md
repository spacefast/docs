---
title: "static_mount_target_in_use"
description: "A static mount dependency blocks changing or deleting this space."
---

A static mount dependency blocks changing or deleting this space.

**How to resolve:** Remove the reported static mount before retrying the operation.

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
  "type": "https://docs.spacefast.com/docs/errors/static_mount_target_in_use",
  "title": "Static mount target in use",
  "status": 400,
  "detail": "A static mount dependency blocks changing or deleting this space.",
  "code": "static_mount_target_in_use",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
