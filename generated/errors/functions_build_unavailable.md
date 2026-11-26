---
title: "functions_build_unavailable"
description: "This publish needs the platform to build the Space's Functions worker, and the Space's runtime can't take a built worker until its next update."
---

This publish needs the platform to build the Space's Functions worker, and the Space's runtime can't take a built worker until its next update.

**How to resolve:** Publish the project with `sf publish`, which builds the worker on your machine and uploads it. Or publish again once the Space's runtime updates. A change that leaves the worker's source alone keeps the live worker and publishes now.

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
  "type": "https://spacefast.com/docs/errors/functions_build_unavailable",
  "title": "Functions build unavailable",
  "status": 422,
  "detail": "This publish needs the platform to build the Space's Functions worker, and the Space's runtime can't take a built worker until its next update.",
  "code": "functions_build_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
