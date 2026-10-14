---
title: "invalid_webhook_url"
description: "The webhook URL is not an allowed public HTTPS endpoint."
---

The webhook URL is not an allowed public HTTPS endpoint.

**How to resolve:** Use a public HTTPS URL. Private networks and link-local addresses are blocked.

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
  "type": "https://spacefast.com/docs/errors/invalid_webhook_url",
  "title": "Invalid webhook url",
  "status": 400,
  "detail": "The webhook URL is not an allowed public HTTPS endpoint.",
  "code": "invalid_webhook_url",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
