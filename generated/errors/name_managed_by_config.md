---
title: "name_managed_by_config"
description: "The space name is managed by sf.jsonc while its live version declares one."
---

The space name is managed by sf.jsonc while its live version declares one.

**How to resolve:** Change name in sf.jsonc and publish, or remove name from the file to rename the space through the API.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "name_managed_by_config",
    "message": "The space name is managed by sf.jsonc while its live version declares one.",
    "docsUrl": "https://docs.spacefast.com/errors/name_managed_by_config",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
