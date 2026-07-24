---
title: "publish_snapshot_empty"
description: "An empty snapshot was sent without an explicit base version."
---

An empty snapshot was sent without an explicit base version.

**How to resolve:** Include at least one file, or declare the base version to intentionally publish an empty site.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_snapshot_empty",
    "message": "An empty snapshot was sent without an explicit base version.",
    "docsUrl": "https://spacefast.com/docs/errors/publish_snapshot_empty",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
