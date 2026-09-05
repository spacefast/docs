---
title: "frame_target_fixed"
description: "The frame link already fixes its target, so the request cannot choose one."
---

The frame link already fixes its target, so the request cannot choose one.

**How to resolve:** Omit `target` from the launch request.

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
  "type": "https://spacefast.com/docs/errors/frame_target_fixed",
  "title": "Frame target fixed",
  "status": 400,
  "detail": "The frame link already fixes its target, so the request cannot choose one.",
  "code": "frame_target_fixed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
