---
title: "anonymous_space_limit_reached"
description: "Too many unclaimed anonymous spaces are already active for this client."
---

Too many unclaimed anonymous spaces are already active for this client.

**How to resolve:** Log in to publish into an authenticated space, or claim/delete an existing anonymous space before creating another.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "anonymous_space_limit_reached",
    "message": "Too many unclaimed anonymous spaces are already active for this client.",
    "docsUrl": "https://spacefast.com/docs/errors/anonymous_space_limit_reached",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
