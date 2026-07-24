---
title: "space_no_live_version"
description: "The space has no live version, so this operation has nothing to act on."
---

The space has no live version, so this operation has nothing to act on.

**How to resolve:** Publish a version to the space, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_no_live_version",
    "message": "The space has no live version, so this operation has nothing to act on.",
    "docsUrl": "https://spacefast.com/docs/errors/space_no_live_version",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
