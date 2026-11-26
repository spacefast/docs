---
title: "usage_budget_exceeded"
description: "A usage budget on this team, subteam or Space has run out for the period, so new builds and Workers requests are paused. The budget is the team's own or its plan's default ($25 on Go, $100 on Pro). Past the budget's serving pause (twice the budget unless its owner set it lower), its Spaces stop serving too. Nothing is deleted."
---

A usage budget on this team, subteam or Space has run out for the period, so new builds and Workers requests are paused. The budget is the team's own or its plan's default ($25 on Go, $100 on Pro). Past the budget's serving pause (twice the budget unless its owner set it lower), its Spaces stop serving too. Nothing is deleted.

**How to resolve:** Ask a team owner or admin to raise the budget in Settings, Usage. Builds and Workers resume within seconds and paused Spaces within a few minutes, or when the next period starts.

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
  "type": "https://spacefast.com/docs/errors/usage_budget_exceeded",
  "title": "Usage budget exceeded",
  "status": 422,
  "detail": "A usage budget on this team, subteam or Space has run out for the period, so new builds and Workers requests are paused. The budget is the team's own or its plan's default ($25 on Go, $100 on Pro). Past the budget's serving pause (twice the budget unless its owner set it lower), its Spaces stop serving too. Nothing is deleted.",
  "code": "usage_budget_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
