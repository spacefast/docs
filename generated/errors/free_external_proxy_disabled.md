---
title: "free_external_proxy_disabled"
description: "Proxy routes to external upstreams are not available on the Free plan."
---

Proxy routes to external upstreams are not available on the Free plan.

**How to resolve:** Remove the proxy rules before publishing. Still stuck? POST /v1/feedback with the error code and request id.

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
  "type": "https://spacefast.com/docs/errors/free_external_proxy_disabled",
  "title": "Free external proxy disabled",
  "status": 400,
  "detail": "Proxy routes to external upstreams are not available on the Free plan.",
  "code": "free_external_proxy_disabled",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
