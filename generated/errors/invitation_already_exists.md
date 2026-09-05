---
title: "invitation_already_exists"
description: "That address already has a pending invitation to this team."
---

That address already has a pending invitation to this team.

**How to resolve:** Resend or cancel the pending invitation instead of creating a second one.

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
  "type": "https://spacefast.com/docs/errors/invitation_already_exists",
  "title": "Invitation already exists",
  "status": 400,
  "detail": "That address already has a pending invitation to this team.",
  "code": "invitation_already_exists",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
