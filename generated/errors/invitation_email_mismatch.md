---
title: "invitation_email_mismatch"
description: "The invitation was addressed to a different email than the signed-in account holds."
---

The invitation was addressed to a different email than the signed-in account holds.

**How to resolve:** Sign in as the invited address, or verify it on the current account, then accept again.

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
  "type": "https://spacefast.com/docs/errors/invitation_email_mismatch",
  "title": "Invitation email mismatch",
  "status": 400,
  "detail": "The invitation was addressed to a different email than the signed-in account holds.",
  "code": "invitation_email_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
