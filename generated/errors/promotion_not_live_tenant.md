---
title: "promotion_not_live_tenant"
description: "Promotion targets a live tenant, and the tenant named in the request is not in live mode."
---

Promotion targets a live tenant, and the tenant named in the request is not in live mode.

**How to resolve:** Call promotion against the live tenant, not its test twin.

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
  "type": "https://spacefast.com/docs/errors/promotion_not_live_tenant",
  "title": "Promotion not live tenant",
  "status": 400,
  "detail": "Promotion targets a live tenant, and the tenant named in the request is not in live mode.",
  "code": "promotion_not_live_tenant",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
