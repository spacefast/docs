---
title: "zero_db_host_install_failed"
description: "The Zero runner could not install the database host bridge."
---

The Zero runner could not install the database host bridge.

**How to resolve:** Rebuild with a current runner and report the failure if it repeats.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_host_install_failed",
    "message": "The Zero runner could not install the database host bridge.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_db_host_install_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
