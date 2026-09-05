---
title: "invalid_webhook_events"
description: "The webhook filter list names an event that is not in the activity taxonomy."
---

The webhook filter list names an event that is not in the activity taxonomy.

**How to resolve:** Use exact event names, a family wildcard such as `version.*`, or the catch-all `*`.

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
  "type": "https://spacefast.com/docs/errors/invalid_webhook_events",
  "title": "Invalid webhook events",
  "status": 400,
  "detail": "The webhook filter list names an event that is not in the activity taxonomy.",
  "code": "invalid_webhook_events",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
