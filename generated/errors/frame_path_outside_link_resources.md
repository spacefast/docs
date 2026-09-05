---
title: "frame_path_outside_link_resources"
description: "The requested frame path is outside the resources the link grants."
---

The requested frame path is outside the resources the link grants.

**How to resolve:** Request a path inside the link's resource set.

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
  "type": "https://spacefast.com/docs/errors/frame_path_outside_link_resources",
  "title": "Frame path outside link resources",
  "status": 400,
  "detail": "The requested frame path is outside the resources the link grants.",
  "code": "frame_path_outside_link_resources",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
