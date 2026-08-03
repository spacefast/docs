---
title: "agent_handoff_origin_unsupported"
description: "The dashboard origin this deployment is configured with cannot mint canonical agent handoff links."
---

The dashboard origin this deployment is configured with cannot mint canonical agent handoff links.

**How to resolve:** Point SPACEFAST_DASHBOARD_URL at a valid HTTP(S) origin. If you cannot change it, contact support.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "agent_handoff_origin_unsupported",
    "message": "The dashboard origin this deployment is configured with cannot mint canonical agent handoff links.",
    "docsUrl": "https://docs.spacefast.com/errors/agent_handoff_origin_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
