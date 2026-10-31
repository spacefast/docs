---
title: "network_policy_enterprise_required"
description: "Ingress network policies require an Enterprise plan."
---

Ingress network policies require an Enterprise plan.

**How to resolve:** Ask a team owner to move the team to Enterprise, or remove the ingress policy.

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
  "type": "https://spacefast.com/docs/errors/network_policy_enterprise_required",
  "title": "Network policy enterprise required",
  "status": 400,
  "detail": "Ingress network policies require an Enterprise plan.",
  "code": "network_policy_enterprise_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
