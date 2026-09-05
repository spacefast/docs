---
title: "domain_facet_external"
description: "The domain is registered at an external registrar, so this facet is not managed here."
---

The domain is registered at an external registrar, so this facet is not managed here.

**How to resolve:** Make the change at the registrar that holds the domain.

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
  "type": "https://spacefast.com/docs/errors/domain_facet_external",
  "title": "Domain facet external",
  "status": 400,
  "detail": "The domain is registered at an external registrar, so this facet is not managed here.",
  "code": "domain_facet_external",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
