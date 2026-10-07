---
title: "team_has_sell_seller"
description: "This team owns a Stripe seller binding and must remain available for Sell order management."
---

This team owns a Stripe seller binding and must remain available for Sell order management.

**How to resolve:** Keep the team to manage shipping, refunds and delivery. Contact support if you need to retire its seller binding and order records.

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
  "type": "https://spacefast.com/docs/errors/team_has_sell_seller",
  "title": "Team has sell seller",
  "status": 400,
  "detail": "This team owns a Stripe seller binding and must remain available for Sell order management.",
  "code": "team_has_sell_seller",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
