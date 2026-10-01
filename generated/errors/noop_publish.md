---
title: "noop_publish"
description: "The publish matched the live version exactly, so nothing changed."
---

The publish matched the live version exactly, so nothing changed.

**How to resolve:** No action is needed. The existing live version already serves this content.

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
  "type": "https://spacefast.com/docs/errors/noop_publish",
  "title": "Noop publish",
  "status": 400,
  "detail": "The publish matched the live version exactly, so nothing changed.",
  "code": "noop_publish",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
