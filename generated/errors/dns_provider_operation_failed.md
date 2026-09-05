---
title: "dns_provider_operation_failed"
description: "The DNS operation did not succeed at the provider."
---

The DNS operation did not succeed at the provider.

**How to resolve:** Retry the operation. If it keeps failing, check the zone at the provider.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_operation_failed",
  "title": "Dns provider operation failed",
  "status": 400,
  "detail": "The DNS operation did not succeed at the provider.",
  "code": "dns_provider_operation_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
