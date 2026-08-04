---
title: "runtime_engine_zip_missing"
description: "The runtime engine artifact is missing from this deployment."
---

The runtime engine artifact is missing from this deployment.

**How to resolve:** Rebuild the control plane so dist/runtime-engine.zip exists.

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
  "type": "https://docs.spacefast.com/docs/errors/runtime_engine_zip_missing",
  "title": "Runtime engine zip missing",
  "status": 400,
  "detail": "The runtime engine artifact is missing from this deployment.",
  "code": "runtime_engine_zip_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
