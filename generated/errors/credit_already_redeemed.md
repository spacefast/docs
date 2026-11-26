---
title: "credit_already_redeemed"
description: "This credit was already redeemed, and each credit is redeemed once."
---

This credit was already redeemed, and each credit is redeemed once.

**How to resolve:** List the team's credits to see what it was redeemed for. Another credit needs a new grant from Spacefast.

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
  "type": "https://spacefast.com/docs/errors/credit_already_redeemed",
  "title": "Credit already redeemed",
  "status": 422,
  "detail": "This credit was already redeemed, and each credit is redeemed once.",
  "code": "credit_already_redeemed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
