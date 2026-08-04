---
title: "abuse_report_invalid_transition"
description: "The abuse report cannot move to the requested status from its current status."
---

The abuse report cannot move to the requested status from its current status.

**How to resolve:** Fetch the report to see its current status and apply a valid transition.

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
  "type": "https://spacefast.com/docs/errors/abuse_report_invalid_transition",
  "title": "Abuse report invalid transition",
  "status": 400,
  "detail": "The abuse report cannot move to the requested status from its current status.",
  "code": "abuse_report_invalid_transition",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
