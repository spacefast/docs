---
title: "connection_ambiguous"
description: "The connector has more than one connection you can use, so the call did not name one."
---

The connector has more than one connection you can use, so the call did not name one.

**How to resolve:** List connections for the connector and address the tool through one of them: `<connectionId>/<tool>`.

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
  "type": "https://spacefast.com/docs/errors/connection_ambiguous",
  "title": "Connection ambiguous",
  "status": 400,
  "detail": "The connector has more than one connection you can use, so the call did not name one.",
  "code": "connection_ambiguous",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
