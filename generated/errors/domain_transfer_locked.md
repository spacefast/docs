---
title: "domain_transfer_locked"
description: "The domain was registered or changed owner less than 60 days ago, so the registry keeps it locked."
---

The domain was registered or changed owner less than 60 days ago, so the registry keeps it locked.

**How to resolve:** Wait until `details.lockedUntil`, then try again. ICANN's Transfer Policy sets the 60-day lock; it can't be lifted early.

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
  "type": "https://spacefast.com/docs/errors/domain_transfer_locked",
  "title": "Domain transfer locked",
  "status": 422,
  "detail": "The domain was registered or changed owner less than 60 days ago, so the registry keeps it locked.",
  "code": "domain_transfer_locked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
