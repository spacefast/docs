---
title: "abuse_report_rate_limited"
description: "Too many abuse reports were submitted from this IP address in the past hour."
---

Too many abuse reports were submitted from this IP address in the past hour.

**How to resolve:** Wait for the window in the `Retry-After` header to pass, then submit the report again.

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
  "type": "https://spacefast.com/docs/errors/abuse_report_rate_limited",
  "title": "Abuse report rate limited",
  "status": 400,
  "detail": "Too many abuse reports were submitted from this IP address in the past hour.",
  "code": "abuse_report_rate_limited",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
