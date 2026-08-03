---
title: "abuse_takedown"
description: "This space was disabled by an abuse takedown and cannot be served or modified."
---

This space was disabled by an abuse takedown and cannot be served or modified.

**How to resolve:** If you believe this is a mistake, contact support with the space id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "abuse_takedown",
    "message": "This space was disabled by an abuse takedown and cannot be served or modified.",
    "docsUrl": "https://docs.spacefast.com/errors/abuse_takedown",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
