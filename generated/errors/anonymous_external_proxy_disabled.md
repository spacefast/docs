---
title: "anonymous_external_proxy_disabled"
description: "Proxy routes to external upstreams do not serve on an unclaimed space."
---

Proxy routes to external upstreams do not serve on an unclaimed space.

**How to resolve:** Claim the space. The rules activate on their own, without a republish.

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
  "type": "https://spacefast.com/docs/errors/anonymous_external_proxy_disabled",
  "title": "Anonymous external proxy disabled",
  "status": 400,
  "detail": "Proxy routes to external upstreams do not serve on an unclaimed space.",
  "code": "anonymous_external_proxy_disabled",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
