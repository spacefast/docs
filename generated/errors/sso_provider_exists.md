---
title: "sso_provider_exists"
description: "Member sign-in is already set up, or changed since you last read it."
---

Member sign-in is already set up, or changed since you last read it.

**How to resolve:** Read member sign-in again to see the current setup. A team has one provider, so remove the setup first only to use another identity provider.

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
  "type": "https://spacefast.com/docs/errors/sso_provider_exists",
  "title": "Sso provider exists",
  "status": 422,
  "detail": "Member sign-in is already set up, or changed since you last read it.",
  "code": "sso_provider_exists",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
