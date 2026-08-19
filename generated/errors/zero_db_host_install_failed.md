---
title: "zero_db_host_install_failed"
description: "The Zero runner cannot install the database host bridge."
---

The Zero runner cannot install the database host bridge.

**How to resolve:** Rebuild with a current runner. If the failure repeats, report it.

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
  "type": "https://spacefast.com/docs/errors/zero_db_host_install_failed",
  "title": "Zero db host install failed",
  "status": 400,
  "detail": "The Zero runner cannot install the database host bridge.",
  "code": "zero_db_host_install_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
