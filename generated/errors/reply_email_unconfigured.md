---
title: "reply_email_unconfigured"
description: "Reply emails for comments aren't configured on this server."
---

Reply emails for comments aren't configured on this server.

**How to resolve:** Contact support with the requestId. Retrying gets the same answer until it's configured.

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
  "type": "https://spacefast.com/docs/errors/reply_email_unconfigured",
  "title": "Reply email unconfigured",
  "status": 400,
  "detail": "Reply emails for comments aren't configured on this server.",
  "code": "reply_email_unconfigured",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
