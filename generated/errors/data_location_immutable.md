---
title: "data_location_immutable"
description: "A Space's data location cannot change after the Space is created."
---

A Space's data location cannot change after the Space is created.

**How to resolve:** Omit `dataLocation`, or send the Space's current value.

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
  "type": "https://spacefast.com/docs/errors/data_location_immutable",
  "title": "Data location immutable",
  "status": 400,
  "detail": "A Space's data location cannot change after the Space is created.",
  "code": "data_location_immutable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
