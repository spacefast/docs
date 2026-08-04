---
title: "static_mount_path_conflict"
description: "The requested mount path overlaps another static mount on this space."
---

The requested mount path overlaps another static mount on this space.

**How to resolve:** Choose a path that is not equal to, above, or below an existing mount path.

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
  "type": "https://docs.spacefast.com/docs/errors/static_mount_path_conflict",
  "title": "Static mount path conflict",
  "status": 400,
  "detail": "The requested mount path overlaps another static mount on this space.",
  "code": "static_mount_path_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
