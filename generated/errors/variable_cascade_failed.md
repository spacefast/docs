---
title: "variable_cascade_failed"
description: "Republishing spaces after a variable change failed."
---

Republishing spaces after a variable change failed.

**How to resolve:** Check the operation's diagnostics. Live content keeps serving the previous values.

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
  "type": "https://docs.spacefast.com/docs/errors/variable_cascade_failed",
  "title": "Variable cascade failed",
  "status": 400,
  "detail": "Republishing spaces after a variable change failed.",
  "code": "variable_cascade_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
