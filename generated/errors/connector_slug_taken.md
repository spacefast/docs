---
title: "connector_slug_taken"
description: "This team already has a connector with that slug."
---

This team already has a connector with that slug.

**How to resolve:** Pick a different slug, or edit the existing connector instead of registering a second one.

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
  "type": "https://spacefast.com/docs/errors/connector_slug_taken",
  "title": "Connector slug taken",
  "status": 400,
  "detail": "This team already has a connector with that slug.",
  "code": "connector_slug_taken",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
