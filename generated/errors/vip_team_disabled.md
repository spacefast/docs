---
title: "vip_team_disabled"
description: "VIP is disabled for this team, so new invitations and memberships are blocked."
---

VIP is disabled for this team, so new invitations and memberships are blocked.

**How to resolve:** Ask the VIP organization administrator to re-enable the Spacefast integration before inviting or joining.

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
  "type": "https://spacefast.com/docs/errors/vip_team_disabled",
  "title": "Vip team disabled",
  "status": 400,
  "detail": "VIP is disabled for this team, so new invitations and memberships are blocked.",
  "code": "vip_team_disabled",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
