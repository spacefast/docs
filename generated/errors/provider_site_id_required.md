---
title: "provider_site_id_required"
description: "The request did not carry a WP Cloud provider site ID."
---

The request did not carry a WP Cloud provider site ID.

**How to resolve:** Send a non-empty provider site ID in the route path.

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
  "type": "https://spacefast.com/docs/errors/provider_site_id_required",
  "title": "Provider site id required",
  "status": 400,
  "detail": "The request did not carry a WP Cloud provider site ID.",
  "code": "provider_site_id_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
