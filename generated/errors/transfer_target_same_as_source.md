---
title: "transfer_target_same_as_source"
description: "The transfer's receiving principal is the one that already owns the Space."
---

The transfer's receiving principal is the one that already owns the Space.

**How to resolve:** Choose a different receiving team or principal.

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
  "type": "https://spacefast.com/docs/errors/transfer_target_same_as_source",
  "title": "Transfer target same as source",
  "status": 400,
  "detail": "The transfer's receiving principal is the one that already owns the Space.",
  "code": "transfer_target_same_as_source",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
