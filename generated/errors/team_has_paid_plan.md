---
title: "team_has_paid_plan"
description: "This team still has an active subscription or a purchase in progress, so it can't be deleted."
---

This team still has an active subscription or a purchase in progress, so it can't be deleted.

**How to resolve:** Cancel the plan in the team's Billing settings, or wait for the purchase to finish, then delete the team.

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
  "type": "https://spacefast.com/docs/errors/team_has_paid_plan",
  "title": "Team has paid plan",
  "status": 400,
  "detail": "This team still has an active subscription or a purchase in progress, so it can't be deleted.",
  "code": "team_has_paid_plan",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
