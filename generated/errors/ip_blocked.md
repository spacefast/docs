---
title: "ip_blocked"
description: "Requests from this network are blocked."
---

Requests from this network are blocked.

**How to resolve:** Contact Spacefast support with the `requestId` to have the block reviewed.

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
  "type": "https://spacefast.com/docs/errors/ip_blocked",
  "title": "Ip blocked",
  "status": 400,
  "detail": "Requests from this network are blocked.",
  "code": "ip_blocked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
