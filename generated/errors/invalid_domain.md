---
title: "invalid_domain"
description: "The lookup input is not a domain name with a TLD."
---

The lookup input is not a domain name with a TLD.

**How to resolve:** Send a full domain name such as `example.com`.

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
  "type": "https://spacefast.com/docs/errors/invalid_domain",
  "title": "Invalid domain",
  "status": 400,
  "detail": "The lookup input is not a domain name with a TLD.",
  "code": "invalid_domain",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
