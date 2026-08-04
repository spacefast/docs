---
title: "stripe_error"
description: "The billing provider reported an error."
---

The billing provider reported an error.

**How to resolve:** Retry. If it persists, check the team's billing settings.

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
  "type": "https://spacefast.com/docs/errors/stripe_error",
  "title": "Stripe error",
  "status": 400,
  "detail": "The billing provider reported an error.",
  "code": "stripe_error",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
