---
title: "plan_subscription_exists"
description: "The team is already on a plan. A team has one plan at a time."
---

The team is already on a plan. A team has one plan at a time.

**How to resolve:** Change the plan instead: upgrade or downgrade with change-plan, or replace the plan in one call. `details.subscription` names the plan in place.

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
  "type": "https://spacefast.com/docs/errors/plan_subscription_exists",
  "title": "Plan subscription exists",
  "status": 422,
  "detail": "The team is already on a plan. A team has one plan at a time.",
  "code": "plan_subscription_exists",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
