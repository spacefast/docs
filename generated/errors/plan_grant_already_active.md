---
title: "plan_grant_already_active"
description: "The team already holds an active operator grant for this plan."
---

The team already holds an active operator grant for this plan.

**How to resolve:** Revoke the existing grant first, or grant a different plan.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/plan_grant_already_active",
  "title": "Plan grant already active",
  "status": 400,
  "detail": "The team already holds an active operator grant for this plan.",
  "code": "plan_grant_already_active",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
