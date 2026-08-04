---
title: "build_output_dir_missing"
description: "The build finished but its output directory was not produced."
---

The build finished but its output directory was not produced.

**How to resolve:** Point the output directory setting at the folder your build writes (for example dist, build, out, or public).

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
  "type": "https://docs.spacefast.com/docs/errors/build_output_dir_missing",
  "title": "Build output dir missing",
  "status": 400,
  "detail": "The build finished but its output directory was not produced.",
  "code": "build_output_dir_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
