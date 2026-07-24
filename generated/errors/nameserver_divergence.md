---
title: "nameserver_divergence"
description: "The domain's observed nameservers diverge from the expected set."
---

The domain's observed nameservers diverge from the expected set.

**How to resolve:** Align the registrar's nameserver records with the expected set, then re-check.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "nameserver_divergence",
    "message": "The domain's observed nameservers diverge from the expected set.",
    "docsUrl": "https://spacefast.com/docs/errors/nameserver_divergence",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
