---
title: "domain_hostname_site_mismatch"
description: "All bindings of one hostname must point at spaces on the same underlying site."
---

All bindings of one hostname must point at spaces on the same underlying site.

**How to resolve:** Bind the hostname to spaces on the same site, or remove the conflicting binding.

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
  "type": "https://docs.spacefast.com/docs/errors/domain_hostname_site_mismatch",
  "title": "Domain hostname site mismatch",
  "status": 400,
  "detail": "All bindings of one hostname must point at spaces on the same underlying site.",
  "code": "domain_hostname_site_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
