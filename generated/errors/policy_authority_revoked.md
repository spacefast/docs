---
title: "policy_authority_revoked"
description: "The credential that asked for this access change no longer has permission to change this Space's access, so the change was not published. A publish freezes the access rules it declares, but the permission to apply them is re-checked at the moment they go live."
---

The credential that asked for this access change no longer has permission to change this Space's access, so the change was not published. A publish freezes the access rules it declares, but the permission to apply them is re-checked at the moment they go live.

**How to resolve:** Publish again with a credential that currently holds `spaces:policy.write` on this Space.

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
  "type": "https://spacefast.com/docs/errors/policy_authority_revoked",
  "title": "Policy authority revoked",
  "status": 400,
  "detail": "The credential that asked for this access change no longer has permission to change this Space's access, so the change was not published. A publish freezes the access rules it declares, but the permission to apply them is re-checked at the moment they go live.",
  "code": "policy_authority_revoked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
