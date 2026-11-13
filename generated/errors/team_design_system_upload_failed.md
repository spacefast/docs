---
title: "team_design_system_upload_failed"
description: "The file or native attachment could not be stored."
---

The file or native attachment could not be stored.

**How to resolve:** Retry with the same operationId and identical file input.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_upload_failed",
  "title": "Team design system upload failed",
  "status": 400,
  "detail": "The file or native attachment could not be stored.",
  "code": "team_design_system_upload_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
