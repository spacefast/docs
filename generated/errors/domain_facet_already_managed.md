---
title: "domain_facet_already_managed"
description: "This facet of the domain is already managed by Spacefast."
---

This facet of the domain is already managed by Spacefast.

**How to resolve:** No action is needed. The facet is already active.

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
  "type": "https://spacefast.com/docs/errors/domain_facet_already_managed",
  "title": "Domain facet already managed",
  "status": 400,
  "detail": "This facet of the domain is already managed by Spacefast.",
  "code": "domain_facet_already_managed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
