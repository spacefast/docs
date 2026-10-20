---
title: "plan_code_already_redeemed"
description: "You already redeemed this plan code, or it was already redeemed for this team."
---

You already redeemed this plan code, or it was already redeemed for this team.

**How to resolve:** Each person redeems a code once and each team receives it once. Ask for a new link if another team needs the plan.

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
  "type": "https://spacefast.com/docs/errors/plan_code_already_redeemed",
  "title": "Plan code already redeemed",
  "status": 400,
  "detail": "You already redeemed this plan code, or it was already redeemed for this team.",
  "code": "plan_code_already_redeemed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
