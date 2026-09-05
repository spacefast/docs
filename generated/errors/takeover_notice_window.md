---
title: "takeover_notice_window"
description: "The hostname takeover is still inside its notice window."
---

The hostname takeover is still inside its notice window.

**How to resolve:** Wait for the notice window to close, then retry the takeover.

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
  "type": "https://spacefast.com/docs/errors/takeover_notice_window",
  "title": "Takeover notice window",
  "status": 400,
  "detail": "The hostname takeover is still inside its notice window.",
  "code": "takeover_notice_window",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
