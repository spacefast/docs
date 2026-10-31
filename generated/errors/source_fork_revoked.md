---
title: "source_fork_revoked"
description: "Source sharing changed before the remix copy completed."
---

Source sharing changed before the remix copy completed.

**How to resolve:** Choose the Source available project again to capture its current consent.

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
  "type": "https://spacefast.com/docs/errors/source_fork_revoked",
  "title": "Source fork revoked",
  "status": 400,
  "detail": "Source sharing changed before the remix copy completed.",
  "code": "source_fork_revoked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
