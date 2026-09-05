---
title: "transfer_source_changed"
description: "The Space's owner changed after the transfer was created, so it cannot be applied."
---

The Space's owner changed after the transfer was created, so it cannot be applied.

**How to resolve:** Cancel the transfer and start a new one from the current owner.

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
  "type": "https://spacefast.com/docs/errors/transfer_source_changed",
  "title": "Transfer source changed",
  "status": 400,
  "detail": "The Space's owner changed after the transfer was created, so it cannot be applied.",
  "code": "transfer_source_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
