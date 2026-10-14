---
title: "runtime_upload_required"
description: "This step requires uploaded content, but that content is not uploaded yet."
---

This step requires uploaded content, but that content is not uploaded yet.

**How to resolve:** Complete the uploads for this session, then retry the step.

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
  "type": "https://spacefast.com/docs/errors/runtime_upload_required",
  "title": "Runtime upload required",
  "status": 400,
  "detail": "This step requires uploaded content, but that content is not uploaded yet.",
  "code": "runtime_upload_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
