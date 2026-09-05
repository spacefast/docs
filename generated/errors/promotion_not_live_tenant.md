---
title: "promotion_not_live_tenant"
description: "Promotion targets a live tenant and the caller's tenant is not live."
---

Promotion targets a live tenant and the caller's tenant is not live.

**How to resolve:** Call promotion with a credential rooted in the live tenant.

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
  "detail": "Promotion targets a live tenant and the caller's tenant is not live.",
  "code": "promotion_not_live_tenant",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
