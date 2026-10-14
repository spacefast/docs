---
title: "wp_cloud_site_still_assigned"
description: "The provider site still has assignments and cannot be released."
---

The provider site still has assignments and cannot be released.

**How to resolve:** Remove the site's assignments first.

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
  "type": "https://spacefast.com/docs/errors/wp_cloud_site_still_assigned",
  "title": "Wp cloud site still assigned",
  "status": 400,
  "detail": "The provider site still has assignments and cannot be released.",
  "code": "wp_cloud_site_still_assigned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
