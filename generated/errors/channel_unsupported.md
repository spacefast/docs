---
title: "channel_unsupported"
description: "This space does not support the requested channel."
---

This space does not support the requested channel.

**How to resolve:** Use the live channel, or create the channel before promoting to it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "channel_unsupported",
    "message": "This space does not support the requested channel.",
    "docsUrl": "https://docs.spacefast.com/errors/channel_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
