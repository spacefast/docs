---
title: "domain_wildcard_label"
description: "The hostname contains a wildcard label."
---

The hostname contains a wildcard label.

**How to resolve:** Add the apex or a concrete hostname, then turn on wildcard routing for it.

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
  "type": "https://spacefast.com/docs/errors/domain_wildcard_label",
  "title": "Domain wildcard label",
  "status": 400,
  "detail": "The hostname contains a wildcard label.",
  "code": "domain_wildcard_label",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
