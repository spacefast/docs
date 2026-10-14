---
title: "domain_primary_redirect_conflict"
description: "A redirecting domain cannot be the primary domain."
---

A redirecting domain cannot be the primary domain.

**How to resolve:** Clear the redirect first, or pick a domain that serves the Space as primary.

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
  "type": "https://spacefast.com/docs/errors/domain_primary_redirect_conflict",
  "title": "Domain primary redirect conflict",
  "status": 400,
  "detail": "A redirecting domain cannot be the primary domain.",
  "code": "domain_primary_redirect_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
