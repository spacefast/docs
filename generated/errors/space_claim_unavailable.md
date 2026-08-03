---
title: "space_claim_unavailable"
description: "This space cannot be claimed."
---

This space cannot be claimed.

**How to resolve:** Only anonymous, unexpired spaces with a valid claim token can be claimed.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_claim_unavailable",
    "message": "This space cannot be claimed.",
    "docsUrl": "https://docs.spacefast.com/errors/space_claim_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
