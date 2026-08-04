---
title: "build_command_missing"
description: "A build or install command could not be found during the build run."
---

A build or install command could not be found during the build run.

**How to resolve:** Check the command spelling and ensure its tool is declared in package.json or available in the build image.

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
  "type": "https://docs.spacefast.com/docs/errors/build_command_missing",
  "title": "Build command missing",
  "status": 400,
  "detail": "A build or install command could not be found during the build run.",
  "code": "build_command_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
