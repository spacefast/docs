---
title: "anonymous_expired"
description: "This anonymous space expired before it was claimed."
---

This anonymous space expired before it was claimed.

**How to resolve:** Publish a fresh space and share its claim link right away this time. If you meant to update a space that is still live, check .spacefast/ (or your saved receipt) for its spaceId and publish to that with its credential instead of creating a new space.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "anonymous_expired",
    "message": "This anonymous space expired before it was claimed.",
    "docsUrl": "https://docs.spacefast.com/errors/anonymous_expired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
