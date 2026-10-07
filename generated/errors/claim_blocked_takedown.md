---
title: "claim_blocked_takedown"
description: "This space is under an abuse takedown and cannot be claimed."
---

This space is under an abuse takedown and cannot be claimed.

**How to resolve:** If you believe the takedown is a mistake, contact support.

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
  "type": "https://spacefast.com/docs/errors/claim_blocked_takedown",
  "title": "Claim blocked takedown",
  "status": 400,
  "detail": "This space is under an abuse takedown and cannot be claimed.",
  "code": "claim_blocked_takedown",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
