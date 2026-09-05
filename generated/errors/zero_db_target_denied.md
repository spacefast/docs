---
title: "zero_db_target_denied"
description: "The database URL points at a host the runtime will not connect to."
---

The database URL points at a host the runtime will not connect to.

**How to resolve:** Point `SPACEFAST_ZERO_DATABASE_URL` at an allowed database host.

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
  "type": "https://spacefast.com/docs/errors/zero_db_target_denied",
  "title": "Zero db target denied",
  "status": 400,
  "detail": "The database URL points at a host the runtime will not connect to.",
  "code": "zero_db_target_denied",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
