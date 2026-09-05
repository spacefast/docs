---
title: "space_person_already_member"
description: "The invited person already has access to this Space."
---

The invited person already has access to this Space.

**How to resolve:** Change the existing person's capabilities instead of inviting them again.

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
  "type": "https://spacefast.com/docs/errors/space_person_already_member",
  "title": "Space person already member",
  "status": 400,
  "detail": "The invited person already has access to this Space.",
  "code": "space_person_already_member",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
