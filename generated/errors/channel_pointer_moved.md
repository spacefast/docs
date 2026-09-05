---
title: "channel_pointer_moved"
description: "The live channel moved to another version while this activation was in flight."
---

The live channel moved to another version while this activation was in flight.

**How to resolve:** Read the channel's current live version, then retry the promotion against it.

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
  "type": "https://spacefast.com/docs/errors/channel_pointer_moved",
  "title": "Channel pointer moved",
  "status": 400,
  "detail": "The live channel moved to another version while this activation was in flight.",
  "code": "channel_pointer_moved",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
