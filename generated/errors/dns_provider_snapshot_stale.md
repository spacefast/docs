---
title: "dns_provider_snapshot_stale"
description: "The cached DNS provider snapshot is stale."
---

The cached DNS provider snapshot is stale.

**How to resolve:** Refresh the provider snapshot, review the new diff, and retry the change against the latest record ids.

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
  "type": "https://docs.spacefast.com/docs/errors/dns_provider_snapshot_stale",
  "title": "Dns provider snapshot stale",
  "status": 400,
  "detail": "The cached DNS provider snapshot is stale.",
  "code": "dns_provider_snapshot_stale",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
