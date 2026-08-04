---
title: "dns_provider_batch_unsupported"
description: "The connected DNS provider cannot apply this batch with the required semantics."
---

The connected DNS provider cannot apply this batch with the required semantics.

**How to resolve:** Split the change or use a provider/zone that supports atomic batch writes.

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
  "type": "https://docs.spacefast.com/docs/errors/dns_provider_batch_unsupported",
  "title": "Dns provider batch unsupported",
  "status": 400,
  "detail": "The connected DNS provider cannot apply this batch with the required semantics.",
  "code": "dns_provider_batch_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
