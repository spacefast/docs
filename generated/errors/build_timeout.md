---
title: "build_timeout"
description: "The build exceeded its time limit before producing a version."
---

The build exceeded its time limit before producing a version.

**How to resolve:** Speed up the build or raise the build timeout in the build settings, then start a new build.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/build_timeout",
  "title": "Build timeout",
  "status": 400,
  "detail": "The build exceeded its time limit before producing a version.",
  "code": "build_timeout",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
