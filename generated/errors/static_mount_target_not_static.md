---
title: "static_mount_target_not_static"
description: "The target production version contains runtime functions."
---

The target production version contains runtime functions.

**How to resolve:** Promote a fully static target version or serve the dynamic application without a static mount.

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
  "type": "https://docs.spacefast.com/docs/errors/static_mount_target_not_static",
  "title": "Static mount target not static",
  "status": 400,
  "detail": "The target production version contains runtime functions.",
  "code": "static_mount_target_not_static",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
