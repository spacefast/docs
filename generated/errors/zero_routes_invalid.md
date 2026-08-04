---
title: "zero_routes_invalid"
description: "The Zero routes artifact is invalid."
---

The Zero routes artifact is invalid.

**How to resolve:** Rebuild the generated routes and publish the version again.

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
  "type": "https://spacefast.com/docs/errors/zero_routes_invalid",
  "title": "Zero routes invalid",
  "status": 400,
  "detail": "The Zero routes artifact is invalid.",
  "code": "zero_routes_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
