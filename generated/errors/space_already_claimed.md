---
title: "space_already_claimed"
description: "The space was already claimed; a claim can only succeed once."
---

The space was already claimed; a claim can only succeed once.

**How to resolve:** If you are the agent that published this space, exchange your claim token once at POST /v1/anonymous-claim/exchange for a durable access token and keep publishing to the same spaceId. Otherwise ask the owner for access — do not publish a duplicate space.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_already_claimed",
    "message": "The space was already claimed; a claim can only succeed once.",
    "docsUrl": "https://spacefast.com/docs/errors/space_already_claimed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
