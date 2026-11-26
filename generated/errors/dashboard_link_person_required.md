---
title: "dashboard_link_person_required"
description: "A dashboard sign-in link signs in a person, and this credential names none: it is a partner, team, machine, or platform credential."
---

A dashboard sign-in link signs in a person, and this credential names none: it is a partner, team, machine, or platform credential.

**How to resolve:** Use a credential a person signed in with: `sf login`, an OAuth sign-in, or the dashboard. Then create the link again. If none is available, give the person the plain dashboard URL; it opens after a normal sign-in.

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
  "type": "https://spacefast.com/docs/errors/dashboard_link_person_required",
  "title": "Dashboard link person required",
  "status": 422,
  "detail": "A dashboard sign-in link signs in a person, and this credential names none: it is a partner, team, machine, or platform credential.",
  "code": "dashboard_link_person_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
