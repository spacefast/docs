---
title: "wp_cloud_domain_not_on_site"
description: "The hostname is not a domain of this provider site."
---

The hostname is not a domain of this provider site.

**How to resolve:** Use the site's primary hostname or one of its aliases.

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
  "type": "https://spacefast.com/docs/errors/wp_cloud_domain_not_on_site",
  "title": "Wp cloud domain not on site",
  "status": 400,
  "detail": "The hostname is not a domain of this provider site.",
  "code": "wp_cloud_domain_not_on_site",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
