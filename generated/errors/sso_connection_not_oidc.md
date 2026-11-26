---
title: "sso_connection_not_oidc"
description: "An earlier server returned this when member sign-in named an identity connection that wasn't OIDC. Current servers no longer send it."
---

An earlier server returned this when member sign-in named an identity connection that wasn't OIDC. Current servers no longer send it.

**How to resolve:** Set up member sign-in with the IdP's issuer, client ID and client secret.

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
  "type": "https://spacefast.com/docs/errors/sso_connection_not_oidc",
  "title": "Sso connection not oidc",
  "status": 422,
  "detail": "An earlier server returned this when member sign-in named an identity connection that wasn't OIDC. Current servers no longer send it.",
  "code": "sso_connection_not_oidc",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
