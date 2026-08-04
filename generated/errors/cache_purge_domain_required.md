---
title: "cache_purge_domain_required"
description: "A purge request must name the domain to purge."
---

A purge request must name the domain to purge.

**How to resolve:** Pass the domain to purge in the request.

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
  "type": "https://spacefast.com/docs/errors/cache_purge_domain_required",
  "title": "Cache purge domain required",
  "status": 400,
  "detail": "A purge request must name the domain to purge.",
  "code": "cache_purge_domain_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
