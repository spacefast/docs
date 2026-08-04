---
title: "domain_facet_not_applicable"
description: "The requested facet does not apply to this domain."
---

The requested facet does not apply to this domain.

**How to resolve:** Check the domain's facets and use one that applies.

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
  "type": "https://docs.spacefast.com/docs/errors/domain_facet_not_applicable",
  "title": "Domain facet not applicable",
  "status": 400,
  "detail": "The requested facet does not apply to this domain.",
  "code": "domain_facet_not_applicable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
