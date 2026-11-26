---
title: "sso_required_on"
description: "The team requires SSO, so member sign-in can't be turned off or removed, and its last verified domain can't be removed."
---

The team requires SSO, so member sign-in can't be turned off or removed, and its last verified domain can't be removed.

**How to resolve:** Turn off Require SSO first. That change is logged on its own.

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
  "type": "https://spacefast.com/docs/errors/sso_required_on",
  "title": "Sso required on",
  "status": 422,
  "detail": "The team requires SSO, so member sign-in can't be turned off or removed, and its last verified domain can't be removed.",
  "code": "sso_required_on",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
