---
title: "transfer_request_notification_policy_managed_by_parent"
description: "The parent team controls which administrators receive subteam transfer requests."
---

The parent team controls which administrators receive subteam transfer requests.

**How to resolve:** Ask a parent owner or admin to change transfer-request recipients on the parent team.

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
  "type": "https://spacefast.com/docs/errors/transfer_request_notification_policy_managed_by_parent",
  "title": "Transfer request notification policy managed by parent",
  "status": 422,
  "detail": "The parent team controls which administrators receive subteam transfer requests.",
  "code": "transfer_request_notification_policy_managed_by_parent",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
