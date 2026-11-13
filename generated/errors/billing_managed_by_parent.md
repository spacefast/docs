---
title: "billing_managed_by_parent"
description: "This team is a subteam. Its plan, seats and billing belong to its parent team."
---

This team is a subteam. Its plan, seats and billing belong to its parent team.

**How to resolve:** Make the billing call on the parent team named in details.billingTeamId.

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
  "type": "https://spacefast.com/docs/errors/billing_managed_by_parent",
  "title": "Billing managed by parent",
  "status": 400,
  "detail": "This team is a subteam. Its plan, seats and billing belong to its parent team.",
  "code": "billing_managed_by_parent",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
