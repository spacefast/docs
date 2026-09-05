---
title: "system_space_conflict"
description: "The system Space changed after the base value in this request was read."
---

The system Space changed after the base value in this request was read.

**How to resolve:** Read the team or tenant again, then retry with the current `baseSystemSpaceId`.

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
  "type": "https://spacefast.com/docs/errors/system_space_conflict",
  "title": "System space conflict",
  "status": 400,
  "detail": "The system Space changed after the base value in this request was read.",
  "code": "system_space_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
