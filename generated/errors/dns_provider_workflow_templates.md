---
title: "dns_provider_workflow_templates"
description: "This provider exposes setup through workflow templates instead of low-level DNS edits."
---

This provider exposes setup through workflow templates instead of low-level DNS edits.

**How to resolve:** Preview and run the advertised template so provider-specific side effects and receipts are captured.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_workflow_templates",
  "title": "Dns provider workflow templates",
  "status": 400,
  "detail": "This provider exposes setup through workflow templates instead of low-level DNS edits.",
  "code": "dns_provider_workflow_templates",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
