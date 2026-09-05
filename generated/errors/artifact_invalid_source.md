---
title: "artifact_invalid_source"
description: "The artifact source is not a renderable page component."
---

The artifact source is not a renderable page component.

**How to resolve:** Export one component named App, with no imports — everything an artifact can use is already in scope.

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
  "type": "https://spacefast.com/docs/errors/artifact_invalid_source",
  "title": "Artifact invalid source",
  "status": 400,
  "detail": "The artifact source is not a renderable page component.",
  "code": "artifact_invalid_source",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
