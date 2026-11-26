---
title: "shared_payment_token_unusable"
description: "The shared payment token can't pay for this: it's spent, revoked, expired, not in US dollars, or its limit is below the total. Nothing was charged."
---

The shared payment token can't pay for this: it's spent, revoked, expired, not in US dollars, or its limit is below the total. Nothing was charged.

**How to resolve:** Read `details.reason`, then ask the user's wallet for a new token that covers the total with tax and send it again.

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
  "type": "https://spacefast.com/docs/errors/shared_payment_token_unusable",
  "title": "Shared payment token unusable",
  "status": 422,
  "detail": "The shared payment token can't pay for this: it's spent, revoked, expired, not in US dollars, or its limit is below the total. Nothing was charged.",
  "code": "shared_payment_token_unusable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
