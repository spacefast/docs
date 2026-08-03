---
title: "channel_name_reserved"
description: "The channel name collides with a reserved hostname suffix and cannot be used."
---

The channel name collides with a reserved hostname suffix and cannot be used.

**How to resolve:** Choose a different channel name. V-prefixed numeric names and ver- prefixes are reserved.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "channel_name_reserved",
    "message": "The channel name collides with a reserved hostname suffix and cannot be used.",
    "docsUrl": "https://docs.spacefast.com/errors/channel_name_reserved",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
