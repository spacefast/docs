---
title: "proxy_upstream_denied"
description: "The proxy upstream is on a denied network and cannot be used."
---

The proxy upstream is on a denied network and cannot be used.

**How to resolve:** Proxy only to public HTTPS upstreams. Private and internal addresses are blocked.

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
  "type": "https://docs.spacefast.com/docs/errors/proxy_upstream_denied",
  "title": "Proxy upstream denied",
  "status": 400,
  "detail": "The proxy upstream is on a denied network and cannot be used.",
  "code": "proxy_upstream_denied",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
