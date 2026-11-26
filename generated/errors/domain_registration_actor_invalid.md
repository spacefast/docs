---
title: "domain_registration_actor_invalid"
description: "This credential can't act on the domain registration at the registrar."
---

This credential can't act on the domain registration at the registrar.

**How to resolve:** Sign in as a person, or use a team key, and try again.

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
  "type": "https://spacefast.com/docs/errors/domain_registration_actor_invalid",
  "title": "Domain registration actor invalid",
  "status": 422,
  "detail": "This credential can't act on the domain registration at the registrar.",
  "code": "domain_registration_actor_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
