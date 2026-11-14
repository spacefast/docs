---
title: "transfer_team_to_customer_unsupported"
description: "A team's space can only move to another team, not to a partner customer."
---

A team's space can only move to another team, not to a partner customer.

**How to resolve:** Pick a team as the target.

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
  "type": "https://spacefast.com/docs/errors/transfer_team_to_customer_unsupported",
  "title": "Transfer team to customer unsupported",
  "status": 400,
  "detail": "A team's space can only move to another team, not to a partner customer.",
  "code": "transfer_team_to_customer_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
