---
title: "dns_zone_awaiting_registration"
description: "The change is saved, but Spacefast DNS serves this domain only once its registration completes."
---

The change is saved, but Spacefast DNS serves this domain only once its registration completes.

**How to resolve:** Nothing to do. The zone is served as soon as the registrar confirms the registration.

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
  "type": "https://spacefast.com/docs/errors/dns_zone_awaiting_registration",
  "title": "Dns zone awaiting registration",
  "status": 400,
  "detail": "The change is saved, but Spacefast DNS serves this domain only once its registration completes.",
  "code": "dns_zone_awaiting_registration",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
