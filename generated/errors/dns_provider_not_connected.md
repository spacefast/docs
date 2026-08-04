---
title: "dns_provider_not_connected"
description: "This domain has no connected DNS provider zone."
---

This domain has no connected DNS provider zone.

**How to resolve:** Attach a provider zone or move the domain to Spacefast-managed DNS before retrying.

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
  "type": "https://docs.spacefast.com/docs/errors/dns_provider_not_connected",
  "title": "Dns provider not connected",
  "status": 400,
  "detail": "This domain has no connected DNS provider zone.",
  "code": "dns_provider_not_connected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
