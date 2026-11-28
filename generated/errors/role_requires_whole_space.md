---
title: "role_requires_whole_space"
description: "Editor and Admin apply to the whole live Space and require an identified audience."
---

Editor and Admin apply to the whole live Space and require an identified audience.

**How to resolve:** Give Editor or Admin on `/**` with the `live` target to a person, team, domain, or identity. Use Can view or Can comment for specific paths or previews. Use a deploy token for a machine.

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
  "type": "https://spacefast.com/docs/errors/role_requires_whole_space",
  "title": "Role requires whole space",
  "status": 422,
  "detail": "Editor and Admin apply to the whole live Space and require an identified audience.",
  "code": "role_requires_whole_space",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
