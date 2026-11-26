---
title: "credential_exfiltration_detected"
description: "A file combines password or payment card fields with a direct Telegram bot or Discord webhook endpoint."
---

A file combines password or payment card fields with a direct Telegram bot or Discord webhook endpoint.

**How to resolve:** Remove direct webhook submission of passwords or payment card details and use an authentication or payment processor instead.

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
  "type": "https://spacefast.com/docs/errors/credential_exfiltration_detected",
  "title": "Credential exfiltration detected",
  "status": 422,
  "detail": "A file combines password or payment card fields with a direct Telegram bot or Discord webhook endpoint.",
  "code": "credential_exfiltration_detected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
