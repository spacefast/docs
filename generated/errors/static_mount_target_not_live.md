---
title: "static_mount_target_not_live"
description: "The target space does not have a production version to mount."
---

The target space does not have a production version to mount.

**How to resolve:** Publish or promote a ready version on the target space, then retry.

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
  "type": "https://docs.spacefast.com/docs/errors/static_mount_target_not_live",
  "title": "Static mount target not live",
  "status": 400,
  "detail": "The target space does not have a production version to mount.",
  "code": "static_mount_target_not_live",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
