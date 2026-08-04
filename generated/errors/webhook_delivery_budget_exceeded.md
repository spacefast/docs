---
title: "webhook_delivery_budget_exceeded"
description: "The webhook exhausted its delivery budget and was paused."
---

The webhook exhausted its delivery budget and was paused.

**How to resolve:** Fix the receiving endpoint, then redeliver or re-enable the webhook.

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
  "type": "https://spacefast.com/docs/errors/webhook_delivery_budget_exceeded",
  "title": "Webhook delivery budget exceeded",
  "status": 400,
  "detail": "The webhook exhausted its delivery budget and was paused.",
  "code": "webhook_delivery_budget_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
