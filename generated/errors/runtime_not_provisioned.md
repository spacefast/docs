---
title: "runtime_not_provisioned"
description: "The space has not served a published version yet, so it has no runtime data to read."
---

The space has not served a published version yet, so it has no runtime data to read.

**How to resolve:** Publish a version first. If a publish is already running, wait for it — the operation receipt reports progress.

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
  "type": "https://spacefast.com/docs/errors/runtime_not_provisioned",
  "title": "Runtime not provisioned",
  "status": 400,
  "detail": "The space has not served a published version yet, so it has no runtime data to read.",
  "code": "runtime_not_provisioned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
