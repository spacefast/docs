---
title: "space_claimed_credential_available"
description: "The space was claimed and its owner kept agent publishing enabled; this claim token now works exactly once as an exchange voucher."
---

The space was claimed and its owner kept agent publishing enabled; this claim token now works exactly once as an exchange voucher.

**How to resolve:** POST /v1/anonymous-claim/exchange with this claim token as bearer auth. Save the returned access token (e.g. .spacefast/state.json), then retry the request with it as Authorization: Bearer. Do not publish a new space.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_claimed_credential_available",
    "message": "The space was claimed and its owner kept agent publishing enabled; this claim token now works exactly once as an exchange voucher.",
    "docsUrl": "https://docs.spacefast.com/errors/space_claimed_credential_available",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
