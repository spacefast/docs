---
title: "enterprise_required"
description: "This feature requires an Enterprise team."
---

This feature requires an Enterprise team.

**How to resolve:** Use a team on an Enterprise plan to manage subteams.

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
  "type": "https://spacefast.com/docs/errors/enterprise_required",
  "title": "Enterprise required",
  "status": 400,
  "detail": "This feature requires an Enterprise team.",
  "code": "enterprise_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
