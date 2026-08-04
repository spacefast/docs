---
title: "domain_wildcard_not_enabled"
description: "Wildcard hostnames are not enabled for this domain or plan."
---

Wildcard hostnames are not enabled for this domain or plan.

**How to resolve:** Bind concrete hostnames, or enable wildcard support for the domain.

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
  "type": "https://docs.spacefast.com/docs/errors/domain_wildcard_not_enabled",
  "title": "Domain wildcard not enabled",
  "status": 400,
  "detail": "Wildcard hostnames are not enabled for this domain or plan.",
  "code": "domain_wildcard_not_enabled",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
