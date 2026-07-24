---
title: "cache_purge_path_required"
description: "A purge request must name at least one path."
---

A purge request must name at least one path.

**How to resolve:** Pass one or more request paths to purge.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "cache_purge_path_required",
    "message": "A purge request must name at least one path.",
    "docsUrl": "https://spacefast.com/docs/errors/cache_purge_path_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
