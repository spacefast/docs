---
title: "anonymous_share_link_limit"
description: "This unclaimed Space already has as many active Links as an unclaimed Space may keep."
---

This unclaimed Space already has as many active Links as an unclaimed Space may keep.

**How to resolve:** Revoke a Link you no longer need, or claim the Space: a claimed Space has no Link limit.

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
  "type": "https://spacefast.com/docs/errors/anonymous_share_link_limit",
  "title": "Anonymous share link limit",
  "status": 422,
  "detail": "This unclaimed Space already has as many active Links as an unclaimed Space may keep.",
  "code": "anonymous_share_link_limit",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
