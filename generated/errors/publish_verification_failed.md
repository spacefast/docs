---
title: "publish_verification_failed"
description: "Post-publish verification did not see the new content serving."
---

Post-publish verification did not see the new content serving.

**How to resolve:** Retry. If the space still serves stale content, contact support.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_verification_failed",
    "message": "Post-publish verification did not see the new content serving.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_verification_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
