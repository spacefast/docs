---
title: "team_sso_required"
description: "This team requires its company's SSO, and this sign-in or credential didn't come through it."
---

This team requires its company's SSO, and this sign-in or credential didn't come through it.

**How to resolve:** Sign in through your company's SSO, then try again. For the CLI, run `sf login` again after that.

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
  "type": "https://spacefast.com/docs/errors/team_sso_required",
  "title": "Team sso required",
  "status": 422,
  "detail": "This team requires its company's SSO, and this sign-in or credential didn't come through it.",
  "code": "team_sso_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
