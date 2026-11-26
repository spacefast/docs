---
title: "company_domains_unavailable"
description: "This credential can't read the company domains for every team on this page, so it can't tell who is outside them."
---

This credential can't read the company domains for every team on this page, so it can't tell who is outside them.

**How to resolve:** Leave out the `outside` filter, or ask someone who manages members on every team, such as a parent-team owner or admin, to run it from the root team.

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
  "type": "https://spacefast.com/docs/errors/company_domains_unavailable",
  "title": "Company domains unavailable",
  "status": 422,
  "detail": "This credential can't read the company domains for every team on this page, so it can't tell who is outside them.",
  "code": "company_domains_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
