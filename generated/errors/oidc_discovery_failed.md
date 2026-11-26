---
title: "oidc_discovery_failed"
description: "The identity provider's OpenID Connect discovery document could not be read."
---

The identity provider's OpenID Connect discovery document could not be read.

**How to resolve:** Check that the issuer URL is right and that the identity provider is up, then try again.

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
  "type": "https://spacefast.com/docs/errors/oidc_discovery_failed",
  "title": "Oidc discovery failed",
  "status": 422,
  "detail": "The identity provider's OpenID Connect discovery document could not be read.",
  "code": "oidc_discovery_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
