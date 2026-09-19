---
title: "wp_cloud_webhook_secret_not_configured"
description: "The infra webhook secret is not configured on this deployment."
---

The infra webhook secret is not configured on this deployment.

**How to resolve:** Set the infra webhook secret in the control-plane environment.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/wp_cloud_webhook_secret_not_configured",
  "title": "Wp cloud webhook secret not configured",
  "status": 400,
  "detail": "The infra webhook secret is not configured on this deployment.",
  "code": "wp_cloud_webhook_secret_not_configured",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
