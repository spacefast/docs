---
title: "vip_invitation_identity_missing"
description: "The accepted VIP invitation has no stored account identity or matching acceptance event."
---

The accepted VIP invitation has no stored account identity or matching acceptance event.

**How to resolve:** Ask a superadmin to investigate the invitation and identify the accepting account before retrying. Do not infer the account from the current email owner.

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
  "type": "https://spacefast.com/docs/errors/vip_invitation_identity_missing",
  "title": "Vip invitation identity missing",
  "status": 400,
  "detail": "The accepted VIP invitation has no stored account identity or matching acceptance event.",
  "code": "vip_invitation_identity_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
