---
title: "channel_unsupported"
description: "This space does not support the requested channel."
---

This space does not support the requested channel.

**How to resolve:** Use the live channel, or create the channel before promoting to it.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/channel_unsupported",
  "title": "Channel unsupported",
  "status": 400,
  "detail": "This space does not support the requested channel.",
  "code": "channel_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
