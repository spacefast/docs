---
title: "invalid_webhook_url"
description: "The webhook URL is not an allowed public HTTPS endpoint."
---

The webhook URL is not an allowed public HTTPS endpoint.

**How to resolve:** Use a public HTTPS URL. Private networks and link-local addresses are blocked.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_webhook_url",
    "message": "The webhook URL is not an allowed public HTTPS endpoint.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_webhook_url",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
