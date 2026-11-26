---
title: "connector_public_serving_team_only"
description: "Only team roles have a public serving setting."
---

Only team roles have a public serving setting.

**How to resolve:** Visitor roles already use each viewer's own account. Personal roles serve only private Spaces with no share link or password.

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
  "type": "https://spacefast.com/docs/errors/connector_public_serving_team_only",
  "title": "Connector public serving team only",
  "status": 422,
  "detail": "Only team roles have a public serving setting.",
  "code": "connector_public_serving_team_only",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
