---
title: "dev_relay_hostname_unavailable"
description: "Every relay hostname derived from this account's email address is taken."
---

Every relay hostname derived from this account's email address is taken.

**How to resolve:** Contact Spacefast support to pick a hostname by hand.

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
  "type": "https://spacefast.com/docs/errors/dev_relay_hostname_unavailable",
  "title": "Dev relay hostname unavailable",
  "status": 400,
  "detail": "Every relay hostname derived from this account's email address is taken.",
  "code": "dev_relay_hostname_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
