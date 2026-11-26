---
title: "artifact_cookie_scan_failed"
description: "A script artifact could not be inspected for shared-domain cookie writes."
---

A script artifact could not be inspected for shared-domain cookie writes.

**How to resolve:** Check the reported file. Supply valid gzip or Brotli companions. The scanner inspects at most 64 MiB of decoded text per file.

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
  "type": "https://spacefast.com/docs/errors/artifact_cookie_scan_failed",
  "title": "Artifact cookie scan failed",
  "status": 422,
  "detail": "A script artifact could not be inspected for shared-domain cookie writes.",
  "code": "artifact_cookie_scan_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
