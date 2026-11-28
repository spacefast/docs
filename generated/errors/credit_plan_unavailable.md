---
title: "credit_plan_unavailable"
description: "A credit starts a plan only on a team without one, and this team is already on a plan."
---

A credit starts a plan only on a team without one, and this team is already on a plan.

**How to resolve:** Redeem the credit as usage credit instead, with option `usage`.

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
  "type": "https://spacefast.com/docs/errors/credit_plan_unavailable",
  "title": "Credit plan unavailable",
  "status": 422,
  "detail": "A credit starts a plan only on a team without one, and this team is already on a plan.",
  "code": "credit_plan_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
