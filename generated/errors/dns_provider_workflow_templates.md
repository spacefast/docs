---
title: "dns_provider_workflow_templates"
description: "This provider exposes setup through workflow templates instead of low-level DNS edits."
---

This provider exposes setup through workflow templates instead of low-level DNS edits.

**How to resolve:** Preview and run the advertised template so provider-specific side effects and receipts are captured.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_workflow_templates",
    "message": "This provider exposes setup through workflow templates instead of low-level DNS edits.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_workflow_templates",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
