---
title: "dns_provider_connection_unavailable"
description: "The DNS provider connection cannot currently be used."
---

The DNS provider connection cannot currently be used.

**How to resolve:** Reconnect, re-enable, or replace the provider connection before retrying.

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
  "type": "https://docs.spacefast.com/docs/errors/dns_provider_connection_unavailable",
  "title": "Dns provider connection unavailable",
  "status": 400,
  "detail": "The DNS provider connection cannot currently be used.",
  "code": "dns_provider_connection_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
