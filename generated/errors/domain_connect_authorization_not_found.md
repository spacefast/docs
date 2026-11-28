---
title: "domain_connect_authorization_not_found"
description: "This access token has no live Domain Connect authorization for the domain and host."
---

This access token has no live Domain Connect authorization for the domain and host.

**How to resolve:** Ask the person to approve your app again for this domain. Its owner may have revoked access.

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
  "type": "https://spacefast.com/docs/errors/domain_connect_authorization_not_found",
  "title": "Domain connect authorization not found",
  "status": 422,
  "detail": "This access token has no live Domain Connect authorization for the domain and host.",
  "code": "domain_connect_authorization_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
