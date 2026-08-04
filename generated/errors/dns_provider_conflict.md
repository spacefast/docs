---
title: "dns_provider_conflict"
description: "The DNS provider rejected the change because it conflicts with existing provider state."
---

The DNS provider rejected the change because it conflicts with existing provider state.

**How to resolve:** Refresh the provider snapshot, resolve the conflicting record or setting, and retry.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_conflict",
  "title": "Dns provider conflict",
  "status": 400,
  "detail": "The DNS provider rejected the change because it conflicts with existing provider state.",
  "code": "dns_provider_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
