---
title: "activity_export_person_required"
description: "An activity export emails its file to a person, and this credential names none: it is a partner, machine, or support-session credential, or a team key nobody made."
---

An activity export emails its file to a person, and this credential names none: it is a partner, machine, or support-session credential, or a team key nobody made.

**How to resolve:** Ask with `sf login`, an OAuth sign-in, the dashboard, or a key a team member made. The link goes to that person's email.

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
  "type": "https://spacefast.com/docs/errors/activity_export_person_required",
  "title": "Activity export person required",
  "status": 422,
  "detail": "An activity export emails its file to a person, and this credential names none: it is a partner, machine, or support-session credential, or a team key nobody made.",
  "code": "activity_export_person_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
