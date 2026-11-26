---
title: "dns_provider_change_pending"
description: "The DNS provider accepted the change but propagation or provider completion is still pending, or its listing does not yet show the record that was written."
---

The DNS provider accepted the change but propagation or provider completion is still pending, or its listing does not yet show the record that was written.

**How to resolve:** Do not send the change again. When `details.writeAccepted` is true the provider accepted it and only a refresh is needed: refresh the provider snapshot and read the zone, or re-check the DNS operation in `details.operationId`. Retrying means retrying the refresh, never the write.

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
  "status": 422,
  "detail": "The DNS provider accepted the change but propagation or provider completion is still pending, or its listing does not yet show the record that was written.",
  "code": "dns_provider_change_pending",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
