---
title: "channel_name_reserved"
description: "The requested channel name is reserved."
---

The requested channel name is reserved.

**How to resolve:** Choose a channel name that is not reserved.

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
  "type": "https://spacefast.com/docs/errors/channel_name_reserved",
  "title": "Channel name reserved",
  "status": 400,
  "detail": "The requested channel name is reserved.",
  "code": "channel_name_reserved",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
