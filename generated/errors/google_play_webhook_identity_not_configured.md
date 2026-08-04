---
title: "google_play_webhook_identity_not_configured"
description: "Google Play Pub/Sub push authentication is not configured on this deployment."
---

Google Play Pub/Sub push authentication is not configured on this deployment.

**How to resolve:** Configure the exact push audience and dedicated Pub/Sub service-account email before enabling RTDN delivery.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/google_play_webhook_identity_not_configured",
  "title": "Google play webhook identity not configured",
  "status": 400,
  "detail": "Google Play Pub/Sub push authentication is not configured on this deployment.",
  "code": "google_play_webhook_identity_not_configured",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
