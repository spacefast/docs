---
title: "dns_provider_controlled_desired_state"
description: "The DNS provider owns the desired record state for this zone."
---

The DNS provider owns the desired record state for this zone.

**How to resolve:** Change the records at the provider rather than through Spacefast.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_controlled_desired_state",
  "title": "Dns provider controlled desired state",
  "status": 400,
  "detail": "The DNS provider owns the desired record state for this zone.",
  "code": "dns_provider_controlled_desired_state",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
