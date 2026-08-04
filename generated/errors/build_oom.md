---
title: "build_oom"
description: "The build process was killed, most likely after running out of memory."
---

The build process was killed, most likely after running out of memory.

**How to resolve:** Reduce the build's memory usage or concurrency, then start a new build.

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
  "type": "https://spacefast.com/docs/errors/build_oom",
  "title": "Build oom",
  "status": 400,
  "detail": "The build process was killed, most likely after running out of memory.",
  "code": "build_oom",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
