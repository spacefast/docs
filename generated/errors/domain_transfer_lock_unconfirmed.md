---
title: "domain_transfer_lock_unconfirmed"
description: "The registrar has not confirmed the transfer lock change."
---

The registrar has not confirmed the transfer lock change.

**How to resolve:** Refresh the registration and retry the lock change; setting the same lock is safe.

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
  "type": "https://spacefast.com/docs/errors/domain_transfer_lock_unconfirmed",
  "title": "Domain transfer lock unconfirmed",
  "status": 422,
  "detail": "The registrar has not confirmed the transfer lock change.",
  "code": "domain_transfer_lock_unconfirmed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
