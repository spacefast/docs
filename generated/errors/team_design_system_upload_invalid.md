---
title: "team_design_system_upload_invalid"
description: "The file upload is invalid or exceeds 100 MB."
---

The file upload is invalid or exceeds 100 MB.

**How to resolve:** Supply a filename, supported contentType, and nonempty base64 file bytes within 100,000,000 bytes.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_upload_invalid",
  "title": "Team design system upload invalid",
  "status": 400,
  "detail": "The file upload is invalid or exceeds 100 MB.",
  "code": "team_design_system_upload_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
