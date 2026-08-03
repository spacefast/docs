---
title: "dns_provider_timeout"
description: "The DNS provider did not accept the change within the bounded wait."
---

The DNS provider did not accept the change within the bounded wait.

**How to resolve:** Check the operation status before retrying to avoid duplicate changes.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_timeout",
    "message": "The DNS provider did not accept the change within the bounded wait.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_timeout",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
