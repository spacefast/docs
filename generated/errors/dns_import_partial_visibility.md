---
title: "dns_import_partial_visibility"
description: "The DNS import could not see the full zone, so importing would lose records."
---

The DNS import could not see the full zone, so importing would lose records.

**How to resolve:** Verify delegation and retry once the full zone is visible.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_import_partial_visibility",
    "message": "The DNS import could not see the full zone, so importing would lose records.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_import_partial_visibility",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
