---
title: "noop_publish"
description: "The publish matched the live version exactly, so nothing changed."
---

The publish matched the live version exactly, so nothing changed.

**How to resolve:** No action needed. The existing live version already serves this content.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "noop_publish",
    "message": "The publish matched the live version exactly, so nothing changed.",
    "docsUrl": "https://docs.spacefast.com/errors/noop_publish",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
