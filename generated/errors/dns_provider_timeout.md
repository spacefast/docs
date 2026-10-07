---
title: "dns_provider_timeout"
description: "The DNS provider did not accept the change within the bounded wait."
---

The DNS provider did not accept the change within the bounded wait.

**How to resolve:** Check the operation status before retrying to avoid duplicate changes.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_timeout",
  "title": "Dns provider timeout",
  "status": 400,
  "detail": "The DNS provider did not accept the change within the bounded wait.",
  "code": "dns_provider_timeout",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
