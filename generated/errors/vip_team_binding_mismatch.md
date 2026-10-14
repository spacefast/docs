---
title: "vip_team_binding_mismatch"
description: "The team does not match the VIP organization or the Manager no longer owns it."
---

The team does not match the VIP organization or the Manager no longer owns it.

**How to resolve:** Ask a superadmin to check the organization binding and Manager ownership before retrying. Reconciliation does not repair ownership.

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
  "type": "https://spacefast.com/docs/errors/vip_team_binding_mismatch",
  "title": "Vip team binding mismatch",
  "status": 400,
  "detail": "The team does not match the VIP organization or the Manager no longer owns it.",
  "code": "vip_team_binding_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
