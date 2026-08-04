---
title: "version_artifact_not_found"
description: "The requested version artifact was not found."
---

The requested version artifact was not found.

**How to resolve:** List the version's convention artifacts to see what exists.

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
  "type": "https://docs.spacefast.com/docs/errors/version_artifact_not_found",
  "title": "Version artifact not found",
  "status": 400,
  "detail": "The requested version artifact was not found.",
  "code": "version_artifact_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
