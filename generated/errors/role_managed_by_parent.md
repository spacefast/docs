---
title: "role_managed_by_parent"
description: "Subteam owners, and the subteam roles of parent-team owners and admins, come from the parent team."
---

Subteam owners, and the subteam roles of parent-team owners and admins, come from the parent team.

**How to resolve:** Grant admin or member on the subteam, or change the person's role on the parent team.

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
  "type": "https://spacefast.com/docs/errors/role_managed_by_parent",
  "title": "Role managed by parent",
  "status": 400,
  "detail": "Subteam owners, and the subteam roles of parent-team owners and admins, come from the parent team.",
  "code": "role_managed_by_parent",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
