---
title: "publish_path_collision"
description: "Two different artifacts would serve the same URL after directory-index or clean-URL resolution."
---

Two different artifacts would serve the same URL after directory-index or clean-URL resolution.

**How to resolve:** Rename or remove one artifact so every request route has one owner.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_path_collision",
    "message": "Two different artifacts would serve the same URL after directory-index or clean-URL resolution.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_path_collision",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
