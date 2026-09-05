---
title: "dns_provider_workflow_templates"
description: "Primary-domain, SSL retry, email provider, DKIM, DMARC, forwarding, and verification records belong to domain actions and service templates."
---

Primary-domain, SSL retry, email provider, DKIM, DMARC, forwarding, and verification records belong to domain actions and service templates.

**How to resolve:** Apply the change through its domain action or service template instead of writing raw records.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_workflow_templates",
  "title": "Dns provider workflow templates",
  "status": 400,
  "detail": "Primary-domain, SSL retry, email provider, DKIM, DMARC, forwarding, and verification records belong to domain actions and service templates.",
  "code": "dns_provider_workflow_templates",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
