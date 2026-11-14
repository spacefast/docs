---
title: "repository_reauthorization_required"
description: "Spacefast can no longer reach this Space's connected repository: its access was revoked, or the Space moved to a team that has not connected it yet."
---

Spacefast can no longer reach this Space's connected repository: its access was revoked, or the Space moved to a team that has not connected it yet.

**How to resolve:** Reconnect the repository from the team that owns the Space, then retry.

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
  "type": "https://spacefast.com/docs/errors/repository_reauthorization_required",
  "title": "Repository reauthorization required",
  "status": 400,
  "detail": "Spacefast can no longer reach this Space's connected repository: its access was revoked, or the Space moved to a team that has not connected it yet.",
  "code": "repository_reauthorization_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
