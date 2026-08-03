---
title: "runtime_hostname_unassigned"
description: "The hostname is not assigned to a runtime, so the request cannot be routed."
---

The hostname is not assigned to a runtime, so the request cannot be routed.

**How to resolve:** Verify the binding is active and DNS points at Spacefast.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_hostname_unassigned",
    "message": "The hostname is not assigned to a runtime, so the request cannot be routed.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_hostname_unassigned",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
