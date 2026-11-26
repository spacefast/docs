---
title: "team_share_links_blocked"
description: "This space's team, or its parent team, blocks share links, so the space can't get a new one."
---

This space's team, or its parent team, blocks share links, so the space can't get a new one.

**How to resolve:** Invite people by email instead, or ask an owner or admin of the team named in the error to turn off Block share links.

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
  "type": "https://spacefast.com/docs/errors/team_share_links_blocked",
  "title": "Team share links blocked",
  "status": 422,
  "detail": "This space's team, or its parent team, blocks share links, so the space can't get a new one.",
  "code": "team_share_links_blocked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
