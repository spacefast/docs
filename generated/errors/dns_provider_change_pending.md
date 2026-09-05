---
title: "dns_provider_change_pending"
description: "A DNS change is still pending at the provider."
---

A DNS change is still pending at the provider.

**How to resolve:** Wait for the pending change to settle, then retry.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_change_pending",
  "title": "Dns provider change pending",
  "status": 400,
  "detail": "A DNS change is still pending at the provider.",
  "code": "dns_provider_change_pending",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
