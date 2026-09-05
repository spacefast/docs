---
title: "proxy_upstream_unresolved"
description: "The proxy upstream hostname does not resolve."
---

The proxy upstream hostname does not resolve.

**How to resolve:** Point the rule at a hostname that resolves in public DNS, then publish again.

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
  "type": "https://spacefast.com/docs/errors/proxy_upstream_unresolved",
  "title": "Proxy upstream unresolved",
  "status": 400,
  "detail": "The proxy upstream hostname does not resolve.",
  "code": "proxy_upstream_unresolved",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
