---
title: "publish_setup_failed"
description: "Provisioning for this publish failed."
---

Provisioning for this publish failed.

**How to resolve:** Retry the publish; if it persists, contact support with the requestId.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_setup_failed",
    "message": "Provisioning for this publish failed.",
    "docsUrl": "https://spacefast.com/docs/errors/publish_setup_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
