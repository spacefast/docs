---
title: "invalid_google_play_webhook_identity"
description: "The Google Play notification did not carry a valid Pub/Sub push identity."
---

The Google Play notification did not carry a valid Pub/Sub push identity.

**How to resolve:** Send the notification through the configured authenticated Pub/Sub push subscription.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_google_play_webhook_identity",
    "message": "The Google Play notification did not carry a valid Pub/Sub push identity.",
    "docsUrl": "https://spacefast.com/docs/errors/invalid_google_play_webhook_identity",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
