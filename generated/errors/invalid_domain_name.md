---
title: "invalid_domain_name"
description: "The hostname is empty or is not a valid domain name."
---

The hostname is empty or is not a valid domain name.

**How to resolve:** Send a hostname such as `app.example.com`, with no scheme, port, or trailing dot.

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
  "type": "https://spacefast.com/docs/errors/invalid_domain_name",
  "title": "Invalid domain name",
  "status": 400,
  "detail": "The hostname is empty or is not a valid domain name.",
  "code": "invalid_domain_name",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
