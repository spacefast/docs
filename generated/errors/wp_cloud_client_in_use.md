---
title: "wp_cloud_client_in_use"
description: "The provider client is in use and cannot be removed."
---

The provider client is in use and cannot be removed.

**How to resolve:** Reassign or delete the dependent sites first.

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
  "type": "https://spacefast.com/docs/errors/wp_cloud_client_in_use",
  "title": "Wp cloud client in use",
  "status": 400,
  "detail": "The provider client is in use and cannot be removed.",
  "code": "wp_cloud_client_in_use",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
