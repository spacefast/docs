---
title: "incumbent_controls_dns"
description: "Another team controls this domain's DNS, so the operation is blocked."
---

Another team controls this domain's DNS, so the operation is blocked.

**How to resolve:** Prove control by completing domain verification, or coordinate with the incumbent.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "incumbent_controls_dns",
    "message": "Another team controls this domain's DNS, so the operation is blocked.",
    "docsUrl": "https://docs.spacefast.com/errors/incumbent_controls_dns",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
