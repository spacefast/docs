---
title: "zero_run_invalid"
description: "A Zero run-handler definition is invalid."
---

A Zero run-handler definition is invalid.

**How to resolve:** Fix the run id, source, capabilities, or database metadata and publish again.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_run_invalid",
  "title": "Zero run invalid",
  "status": 400,
  "detail": "A Zero run-handler definition is invalid.",
  "code": "zero_run_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
