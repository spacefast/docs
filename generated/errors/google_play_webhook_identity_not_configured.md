---
title: "google_play_webhook_identity_not_configured"
description: "Google Play Pub/Sub push authentication is not configured on this deployment."
---

Google Play Pub/Sub push authentication is not configured on this deployment.

**How to resolve:** Configure the exact push audience and dedicated Pub/Sub service-account email before enabling RTDN delivery.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "google_play_webhook_identity_not_configured",
    "message": "Google Play Pub/Sub push authentication is not configured on this deployment.",
    "docsUrl": "https://spacefast.com/docs/errors/google_play_webhook_identity_not_configured",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
