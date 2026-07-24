---
title: "version_not_promotable"
description: "The version cannot be promoted in its current status."
---

The version cannot be promoted in its current status.

**How to resolve:** Only ready versions can be promoted to a channel.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_not_promotable",
    "message": "The version cannot be promoted in its current status.",
    "docsUrl": "https://spacefast.com/docs/errors/version_not_promotable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
