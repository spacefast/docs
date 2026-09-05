---
title: "invalid_space_mode"
description: "The requested Space serving mode is not one the API accepts."
---

The requested Space serving mode is not one the API accepts.

**How to resolve:** Set the Space mode to a supported value, then retry.

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
  "type": "https://spacefast.com/docs/errors/invalid_space_mode",
  "title": "Invalid space mode",
  "status": 400,
  "detail": "The requested Space serving mode is not one the API accepts.",
  "code": "invalid_space_mode",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
