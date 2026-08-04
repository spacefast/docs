---
title: "nameserver_divergence"
description: "The domain's observed nameservers diverge from the expected set."
---

The domain's observed nameservers diverge from the expected set.

**How to resolve:** Align the registrar's nameserver records with the expected set, then re-check.

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
  "type": "https://spacefast.com/docs/errors/nameserver_divergence",
  "title": "Nameserver divergence",
  "status": 400,
  "detail": "The domain's observed nameservers diverge from the expected set.",
  "code": "nameserver_divergence",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
