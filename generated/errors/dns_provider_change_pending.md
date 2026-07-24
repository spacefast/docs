---
title: "dns_provider_change_pending"
description: "The DNS provider accepted the change but propagation or provider completion is still pending."
---

The DNS provider accepted the change but propagation or provider completion is still pending.

**How to resolve:** Wait and re-check the pollable DNS operation before submitting another conflicting change.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_change_pending",
    "message": "The DNS provider accepted the change but propagation or provider completion is still pending.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_change_pending",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
