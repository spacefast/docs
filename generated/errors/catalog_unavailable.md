---
title: "catalog_unavailable"
description: "The connector catalog could not be built right now."
---

The connector catalog could not be built right now.

**How to resolve:** Retry in a moment. You can still register a connector directly from its spec URL or endpoint.

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
  "type": "https://spacefast.com/docs/errors/catalog_unavailable",
  "title": "Catalog unavailable",
  "status": 400,
  "detail": "The connector catalog could not be built right now.",
  "code": "catalog_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
