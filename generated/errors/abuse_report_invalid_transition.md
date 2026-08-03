---
title: "abuse_report_invalid_transition"
description: "The abuse report cannot move to the requested status from its current status."
---

The abuse report cannot move to the requested status from its current status.

**How to resolve:** Fetch the report to see its current status and apply a valid transition.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "abuse_report_invalid_transition",
    "message": "The abuse report cannot move to the requested status from its current status.",
    "docsUrl": "https://docs.spacefast.com/errors/abuse_report_invalid_transition",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
