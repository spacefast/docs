---
title: "sso_session_required"
description: "Requiring SSO needs member sign-in turned on, a verified domain, and a session that signed in through this team's SSO."
---

Requiring SSO needs member sign-in turned on, a verified domain, and a session that signed in through this team's SSO.

**How to resolve:** Sign in through your company's SSO, then turn on Require SSO.

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
  "type": "https://spacefast.com/docs/errors/sso_session_required",
  "title": "Sso session required",
  "status": 422,
  "detail": "Requiring SSO needs member sign-in turned on, a verified domain, and a session that signed in through this team's SSO.",
  "code": "sso_session_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
