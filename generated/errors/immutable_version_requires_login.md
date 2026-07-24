---
title: "immutable_version_requires_login"
description: "This immutable version URL is past its public window and now requires login."
---

This immutable version URL is past its public window and now requires login.

**How to resolve:** Sign in to view it, or promote the version to a channel for public serving.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "immutable_version_requires_login",
    "message": "This immutable version URL is past its public window and now requires login.",
    "docsUrl": "https://spacefast.com/docs/errors/immutable_version_requires_login",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
