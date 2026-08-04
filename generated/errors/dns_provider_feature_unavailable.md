---
title: "dns_provider_feature_unavailable"
description: "The requested DNS provider field or feature is not available for this zone."
---

The requested DNS provider field or feature is not available for this zone.

**How to resolve:** Check the DNS capabilities response and remove unsupported fields.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_feature_unavailable",
  "title": "Dns provider feature unavailable",
  "status": 400,
  "detail": "The requested DNS provider field or feature is not available for this zone.",
  "code": "dns_provider_feature_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
