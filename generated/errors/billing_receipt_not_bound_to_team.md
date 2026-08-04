---
title: "billing_receipt_not_bound_to_team"
description: "The store purchase was made under a different account token than this team's."
---

The store purchase was made under a different account token than this team's.

**How to resolve:** Verify the purchase from the team that initiated it, or contact support to rebind it.

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
  "type": "https://spacefast.com/docs/errors/billing_receipt_not_bound_to_team",
  "title": "Billing receipt not bound to team",
  "status": 400,
  "detail": "The store purchase was made under a different account token than this team's.",
  "code": "billing_receipt_not_bound_to_team",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
