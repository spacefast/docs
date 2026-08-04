---
title: "dns_provider_snapshot_unavailable"
description: "Spacefast cannot cache the latest DNS provider snapshot."
---

Spacefast cannot cache the latest DNS provider snapshot.

**How to resolve:** Retry refresh after the cache or provider recovers. Do not edit connected-provider records from stale data.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_snapshot_unavailable",
  "title": "Dns provider snapshot unavailable",
  "status": 400,
  "detail": "Spacefast cannot cache the latest DNS provider snapshot.",
  "code": "dns_provider_snapshot_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
