---
title: "dns_provider_batch_unsupported"
description: "The DNS provider does not accept batched record writes."
---

The DNS provider does not accept batched record writes.

**How to resolve:** Apply the record changes one at a time.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_batch_unsupported",
  "title": "Dns provider batch unsupported",
  "status": 400,
  "detail": "The DNS provider does not accept batched record writes.",
  "code": "dns_provider_batch_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
