---
title: "wp_cloud_site_still_assigned"
description: "The WP Cloud site is still bound to a Space or placement."
---

The WP Cloud site is still bound to a Space or placement.

**How to resolve:** Unassign the site from its placement before deleting it.

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
  "detail": "The WP Cloud site is still bound to a Space or placement.",
  "code": "wp_cloud_site_still_assigned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
