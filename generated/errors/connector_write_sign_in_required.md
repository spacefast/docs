---
title: "connector_write_sign_in_required"
description: "Writing through a shared team or personal account needs a signed-in member of the Space."
---

Writing through a shared team or personal account needs a signed-in member of the Space.

**How to resolve:** Sign in as a current member of the owning team. Anyone can still read through the role.

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
  "type": "https://spacefast.com/docs/errors/connector_write_sign_in_required",
  "title": "Connector write sign in required",
  "status": 422,
  "detail": "Writing through a shared team or personal account needs a signed-in member of the Space.",
  "code": "connector_write_sign_in_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
