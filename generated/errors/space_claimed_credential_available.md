---
title: "space_claimed_credential_available"
description: "The owner claimed the Space and left agent publishing on, so the Space key still exchanges once."
---

The owner claimed the Space and left agent publishing on, so the Space key still exchanges once.

**How to resolve:** Exchange the Space key at `POST /v1/claim/exchange` for a durable API key, then retry with it.

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
  "type": "https://spacefast.com/docs/errors/space_claimed_credential_available",
  "title": "Space claimed credential available",
  "status": 400,
  "detail": "The owner claimed the Space and left agent publishing on, so the Space key still exchanges once.",
  "code": "space_claimed_credential_available",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
