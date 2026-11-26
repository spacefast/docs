---
title: "feature_scope_requires_parent_team"
description: "This feature is set once per company, so a subteam can't carry its own override."
---

This feature is set once per company, so a subteam can't carry its own override.

**How to resolve:** Set the override on the parent team. It applies to every subteam.

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
  "type": "https://spacefast.com/docs/errors/feature_scope_requires_parent_team",
  "title": "Feature scope requires parent team",
  "status": 422,
  "detail": "This feature is set once per company, so a subteam can't carry its own override.",
  "code": "feature_scope_requires_parent_team",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
