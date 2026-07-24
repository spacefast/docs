---
title: "lost_domain_control"
description: "Spacefast no longer observes DNS control for this domain."
---

Spacefast no longer observes DNS control for this domain.

**How to resolve:** Restore the documented DNS records, then re-run domain verification.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "lost_domain_control",
    "message": "Spacefast no longer observes DNS control for this domain.",
    "docsUrl": "https://spacefast.com/docs/errors/lost_domain_control",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
