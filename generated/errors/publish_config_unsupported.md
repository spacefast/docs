---
title: "publish_config_unsupported"
description: "The publish carries configuration this endpoint does not support."
---

The publish carries configuration this endpoint does not support.

**How to resolve:** Move the configuration into sf.jsonc or the space settings.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_config_unsupported",
    "message": "The publish carries configuration this endpoint does not support.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_config_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
