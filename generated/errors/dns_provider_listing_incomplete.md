---
title: "dns_provider_listing_incomplete"
description: "The DNS provider stopped listing the zone's records before the end, so Spacefast did not use the partial list."
---

The DNS provider stopped listing the zone's records before the end, so Spacefast did not use the partial list.

**How to resolve:** Retrying gives the same result until the zone changes at the provider. Spacefast lists at most 10,000 records of a Vercel zone, and cannot list past more than 99 Vercel records created in the same millisecond. Remove records the zone no longer needs at the provider, then refresh the provider snapshot. When `details.writeAccepted` is true, the change you sent has already reached the provider: do not send it again.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_listing_incomplete",
  "title": "Dns provider listing incomplete",
  "status": 422,
  "detail": "The DNS provider stopped listing the zone's records before the end, so Spacefast did not use the partial list.",
  "code": "dns_provider_listing_incomplete",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
