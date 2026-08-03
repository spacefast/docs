---
title: "version_already_live"
description: "The version is already live on this channel."
---

The version is already live on this channel.

**How to resolve:** No action needed.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_already_live",
    "message": "The version is already live on this channel.",
    "docsUrl": "https://docs.spacefast.com/errors/version_already_live",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
