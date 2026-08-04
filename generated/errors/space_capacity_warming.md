---
title: "space_capacity_warming"
description: "This space is waiting on serving capacity that is being provisioned in the background."
---

This space is waiting on serving capacity that is being provisioned in the background.

**How to resolve:** Wait for the Retry-After window, then send the same publish again. No version was created and no files were uploaded.

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
  "type": "https://spacefast.com/docs/errors/space_capacity_warming",
  "title": "Space capacity warming",
  "status": 400,
  "detail": "This space is waiting on serving capacity that is being provisioned in the background.",
  "code": "space_capacity_warming",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
