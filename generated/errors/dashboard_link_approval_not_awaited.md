---
title: "dashboard_link_approval_not_awaited"
description: "A dashboard link to an approval can be made only by the credential that is waiting on that approval."
---

A dashboard link to an approval can be made only by the credential that is waiting on that approval.

**How to resolve:** Create the link from the same connection that asked for the approval, or open the approval page in the dashboard after a normal sign-in.

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
  "type": "https://spacefast.com/docs/errors/dashboard_link_approval_not_awaited",
  "title": "Dashboard link approval not awaited",
  "status": 422,
  "detail": "A dashboard link to an approval can be made only by the credential that is waiting on that approval.",
  "code": "dashboard_link_approval_not_awaited",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
