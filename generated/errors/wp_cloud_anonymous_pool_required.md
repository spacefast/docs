---
title: "wp_cloud_anonymous_pool_required"
description: "This operation requires an anonymous pool site."
---

This operation requires an anonymous pool site.

**How to resolve:** Target a pool-class site.

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
  "type": "https://spacefast.com/docs/errors/wp_cloud_anonymous_pool_required",
  "title": "Wp cloud anonymous pool required",
  "status": 400,
  "detail": "This operation requires an anonymous pool site.",
  "code": "wp_cloud_anonymous_pool_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
