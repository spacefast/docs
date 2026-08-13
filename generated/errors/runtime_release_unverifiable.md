---
title: "runtime_release_unverifiable"
description: "The requested platform release could not be verified at its origin."
---

The requested platform release could not be verified at its origin.

**How to resolve:** Check that the release exists and published its full set of artifacts, then request it again.

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
  "type": "https://spacefast.com/docs/errors/runtime_release_unverifiable",
  "title": "Runtime release unverifiable",
  "status": 400,
  "detail": "The requested platform release could not be verified at its origin.",
  "code": "runtime_release_unverifiable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
