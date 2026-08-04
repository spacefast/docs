---
title: "whois_unavailable"
description: "WHOIS data is unavailable for this domain right now."
---

WHOIS data is unavailable for this domain right now.

**How to resolve:** Retry later.

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
  "type": "https://docs.spacefast.com/docs/errors/whois_unavailable",
  "title": "Whois unavailable",
  "status": 400,
  "detail": "WHOIS data is unavailable for this domain right now.",
  "code": "whois_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
