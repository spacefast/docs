---
title: "runtime_release_not_promotable"
description: "The requested platform release cannot be promoted in this environment."
---

The requested platform release cannot be promoted in this environment.

**How to resolve:** Pick a release this environment recorded and did not refuse, one that provides every capability `details.missingCapabilities` lists.

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
  "type": "https://spacefast.com/docs/errors/runtime_release_not_promotable",
  "title": "Runtime release not promotable",
  "status": 422,
  "detail": "The requested platform release cannot be promoted in this environment.",
  "code": "runtime_release_not_promotable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
