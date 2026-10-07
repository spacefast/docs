---
title: "subteam_name_taken"
description: "Another subteam in this team already uses that name, ignoring case."
---

Another subteam in this team already uses that name, ignoring case.

**How to resolve:** Choose a different name or use the existing subteam.

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
  "type": "https://spacefast.com/docs/errors/subteam_name_taken",
  "title": "Subteam name taken",
  "status": 400,
  "detail": "Another subteam in this team already uses that name, ignoring case.",
  "code": "subteam_name_taken",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
