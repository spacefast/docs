---
title: "webhook_delivery_budget_exceeded"
description: "The account used up its hourly webhook delivery budget."
---

The account used up its hourly webhook delivery budget.

**How to resolve:** Wait for the hour to roll over, or cut the number of subscribed events.

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
  "type": "https://spacefast.com/docs/errors/webhook_delivery_budget_exceeded",
  "title": "Webhook delivery budget exceeded",
  "status": 400,
  "detail": "The account used up its hourly webhook delivery budget.",
  "code": "webhook_delivery_budget_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
