---
title: "service_signature_invalid"
description: "The service request signature could not be verified."
---

The service request signature could not be verified.

**How to resolve:** Sign the exact request method, path, body digest, timestamp, and a fresh nonce.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "service_signature_invalid",
    "message": "The service request signature could not be verified.",
    "docsUrl": "https://docs.spacefast.com/errors/service_signature_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
