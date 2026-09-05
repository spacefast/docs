---
title: "system_space_invalid"
description: "The chosen system Space is not a live, enabled Space this team or tenant owns."
---

The chosen system Space is not a live, enabled Space this team or tenant owns.

**How to resolve:** Point `systemSpaceId` at a live Space the owner holds.

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
  "type": "https://spacefast.com/docs/errors/system_space_invalid",
  "title": "System space invalid",
  "status": 400,
  "detail": "The chosen system Space is not a live, enabled Space this team or tenant owns.",
  "code": "system_space_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
