---
title: "publish_base_changed"
description: "Someone published new space settings after the base you loaded, so saving would overwrite their change."
---

Someone published new space settings after the base you loaded, so saving would overwrite their change.

**How to resolve:** Reload the latest settings, review the difference, and save again. Pass force only to overwrite deliberately.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_base_changed",
    "message": "Someone published new space settings after the base you loaded, so saving would overwrite their change.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_base_changed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
