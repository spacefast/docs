---
title: "invalid_runtime_event"
description: "The runtime event payload is not recognized."
---

The runtime event payload is not recognized.

**How to resolve:** Verify the event shape matches the runtime callback contract.

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
  "type": "https://spacefast.com/docs/errors/invalid_runtime_event",
  "title": "Invalid runtime event",
  "status": 400,
  "detail": "The runtime event payload is not recognized.",
  "code": "invalid_runtime_event",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
