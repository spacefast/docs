---
title: "dns_export_required"
description: "This operation requires exporting the current DNS records first."
---

This operation requires exporting the current DNS records first.

**How to resolve:** Export the zone, confirm the snapshot, and retry the operation.

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
  "type": "https://docs.spacefast.com/docs/errors/dns_export_required",
  "title": "Dns export required",
  "status": 400,
  "detail": "This operation requires exporting the current DNS records first.",
  "code": "dns_export_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
