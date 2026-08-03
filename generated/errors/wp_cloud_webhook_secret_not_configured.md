---
title: "wp_cloud_webhook_secret_not_configured"
description: "The infra webhook secret is not configured on this deployment."
---

The infra webhook secret is not configured on this deployment.

**How to resolve:** Set the infra webhook secret in the control-plane environment.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "wp_cloud_webhook_secret_not_configured",
    "message": "The infra webhook secret is not configured on this deployment.",
    "docsUrl": "https://docs.spacefast.com/errors/wp_cloud_webhook_secret_not_configured",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
