---
title: "static_mount_target_forbidden"
description: "The target space is not an authorized space in the same team."
---

The target space is not an authorized space in the same team.

**How to resolve:** Choose another space in the source space's team and authenticate with read access to its versions.

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
  "type": "https://docs.spacefast.com/docs/errors/static_mount_target_forbidden",
  "title": "Static mount target forbidden",
  "status": 400,
  "detail": "The target space is not an authorized space in the same team.",
  "code": "static_mount_target_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
