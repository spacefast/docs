---
title: "proxy_upstream_denied"
description: "The proxy upstream is on a denied network and cannot be used."
---

The proxy upstream is on a denied network and cannot be used.

**How to resolve:** Proxy only to public HTTPS upstreams outside Spacefast. Private and internal addresses are blocked, and so are other Spaces' space.fast and view.fast hostnames. Browser calls require the target to allow your origin through CORS; otherwise ask its owner for a supported access method.

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
  "type": "https://spacefast.com/docs/errors/proxy_upstream_denied",
  "title": "Proxy upstream denied",
  "status": 422,
  "detail": "The proxy upstream is on a denied network and cannot be used.",
  "code": "proxy_upstream_denied",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
