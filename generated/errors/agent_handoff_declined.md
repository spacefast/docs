---
title: "agent_handoff_declined"
description: "The app-private agent handoff cannot be redeemed."
---

The app-private agent handoff cannot be redeemed.

**How to resolve:** Ask the user to create a fresh handoff for this space and client, then redeem that new link once.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "agent_handoff_declined",
    "message": "The app-private agent handoff cannot be redeemed.",
    "docsUrl": "https://docs.spacefast.com/errors/agent_handoff_declined",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
