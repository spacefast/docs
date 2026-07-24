---
title: "takeover_notice_window"
description: "The hostname was recently bound elsewhere; a takeover notice window applies."
---

The hostname was recently bound elsewhere; a takeover notice window applies.

**How to resolve:** Retry after the notice window, or have the current holder release the binding.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "takeover_notice_window",
    "message": "The hostname was recently bound elsewhere; a takeover notice window applies.",
    "docsUrl": "https://spacefast.com/docs/errors/takeover_notice_window",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
