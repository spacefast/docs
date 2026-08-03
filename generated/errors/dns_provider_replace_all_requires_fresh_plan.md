---
title: "dns_provider_replace_all_requires_fresh_plan"
description: "This provider requires a fresh full-zone plan before replacing DNS records."
---

This provider requires a fresh full-zone plan before replacing DNS records.

**How to resolve:** Refresh the provider snapshot, review the replace-all plan, then run the action from that fresh plan.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_replace_all_requires_fresh_plan",
    "message": "This provider requires a fresh full-zone plan before replacing DNS records.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_replace_all_requires_fresh_plan",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
