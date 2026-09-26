---
title: "authorization_level_not_allowed"
description: "This operation is reserved for a signed-in person, or the credential is acting at an authorization level the operation does not accept."
---

This operation is reserved for a signed-in person, or the credential is acting at an authorization level the operation does not accept.

**How to resolve:** This is not a scope problem and elevation will not clear it. Ask the person to perform the action in the dashboard.

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
  "type": "https://spacefast.com/docs/errors/authorization_level_not_allowed",
  "title": "Authorization level not allowed",
  "status": 400,
  "detail": "This operation is reserved for a signed-in person, or the credential is acting at an authorization level the operation does not accept.",
  "code": "authorization_level_not_allowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
