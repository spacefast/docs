---
title: "domain_facet_not_applicable"
description: "The facet does not exist on this domain record."
---

The facet does not exist on this domain record.

**How to resolve:** Call the facet route on the apex record, or on a hostname whose own NS delegation is observed in public DNS.

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
  "type": "https://spacefast.com/docs/errors/domain_facet_not_applicable",
  "title": "Domain facet not applicable",
  "status": 400,
  "detail": "The facet does not exist on this domain record.",
  "code": "domain_facet_not_applicable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
