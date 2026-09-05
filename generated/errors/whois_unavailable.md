---
title: "whois_unavailable"
description: "No WHOIS or RDAP record was returned for the domain."
---

No WHOIS or RDAP record was returned for the domain.

**How to resolve:** Retry the lookup shortly.

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
  "type": "https://spacefast.com/docs/errors/whois_unavailable",
  "title": "Whois unavailable",
  "status": 400,
  "detail": "No WHOIS or RDAP record was returned for the domain.",
  "code": "whois_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
