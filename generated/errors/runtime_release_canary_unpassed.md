---
title: "runtime_release_canary_unpassed"
description: "The platform release candidate has not passed its canaries in this environment."
---

The platform release candidate has not passed its canaries in this environment.

**How to resolve:** Mark at least one canary box in this environment, then rerun the release's deploy record step and wait for its canaries to pass. `details.reason` says which step is missing.

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
  "type": "https://spacefast.com/docs/errors/runtime_release_canary_unpassed",
  "title": "Runtime release canary unpassed",
  "status": 422,
  "detail": "The platform release candidate has not passed its canaries in this environment.",
  "code": "runtime_release_canary_unpassed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
