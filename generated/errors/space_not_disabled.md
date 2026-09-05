---
title: "space_not_disabled"
description: "The Space is not disabled, so there is nothing to restore."
---

The Space is not disabled, so there is nothing to restore.

**How to resolve:** Skip the restore; the Space is already serving.

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
  "type": "https://spacefast.com/docs/errors/space_not_disabled",
  "title": "Space not disabled",
  "status": 400,
  "detail": "The Space is not disabled, so there is nothing to restore.",
  "code": "space_not_disabled",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
