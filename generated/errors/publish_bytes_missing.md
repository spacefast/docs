---
title: "publish_bytes_missing"
description: "The publish has no complete staged content to materialize."
---

The publish has no complete staged content to materialize.

**How to resolve:** Finish uploading the staged content, or start a new publish.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_bytes_missing",
    "message": "The publish has no complete staged content to materialize.",
    "docsUrl": "https://spacefast.com/docs/errors/publish_bytes_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
