---
title: "access_scope_suggestion"
description: "Published dependencies cluster under paths that may be useful as explicit public scopes."
---

Published dependencies cluster under paths that may be useful as explicit public scopes.

**How to resolve:** If those files are safe for anyone to read, make only the suggested scopes Public. Otherwise leave access unchanged.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "access_scope_suggestion",
    "message": "Published dependencies cluster under paths that may be useful as explicit public scopes.",
    "docsUrl": "https://docs.spacefast.com/errors/access_scope_suggestion",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
