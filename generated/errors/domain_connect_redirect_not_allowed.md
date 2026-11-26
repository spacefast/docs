---
title: "domain_connect_redirect_not_allowed"
description: "The `redirect_uri` is not on a domain the template lists in `syncRedirectDomain`."
---

The `redirect_uri` is not on a domain the template lists in `syncRedirectDomain`.

**How to resolve:** Send a redirect on one of the template's registered redirect domains, or sign the request.

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
  "type": "https://spacefast.com/docs/errors/domain_connect_redirect_not_allowed",
  "title": "Domain connect redirect not allowed",
  "status": 422,
  "detail": "The `redirect_uri` is not on a domain the template lists in `syncRedirectDomain`.",
  "code": "domain_connect_redirect_not_allowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
