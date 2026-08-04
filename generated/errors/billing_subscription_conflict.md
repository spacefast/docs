---
title: "billing_subscription_conflict"
description: "The team already has an active subscription with another payment provider."
---

The team already has an active subscription with another payment provider.

**How to resolve:** Cancel the existing subscription before subscribing through a different provider.

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
  "type": "https://spacefast.com/docs/errors/billing_subscription_conflict",
  "title": "Billing subscription conflict",
  "status": 400,
  "detail": "The team already has an active subscription with another payment provider.",
  "code": "billing_subscription_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
