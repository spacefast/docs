---
title: "domain_lookup_rate_limited"
description: "Too many domain lookups were made in a short window."
---

Too many domain lookups were made in a short window.

**How to resolve:** Wait for the window in the Retry-After header to pass before searching again.

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
  "type": "https://spacefast.com/docs/errors/domain_lookup_rate_limited",
  "title": "Domain lookup rate limited",
  "status": 400,
  "detail": "Too many domain lookups were made in a short window.",
  "code": "domain_lookup_rate_limited",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
