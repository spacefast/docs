---
title: "space_already_claimed"
description: "The space was already claimed. A claim can only succeed once."
---

The space was already claimed. A claim can only succeed once.

**How to resolve:** If you published this space, exchange your claim token once at POST /v1/anonymous-claim/exchange. Keep publishing to the same spaceId with that durable API key. Otherwise ask the owner for access — do not publish a duplicate space.

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
  "type": "https://spacefast.com/docs/errors/space_already_claimed",
  "title": "Space already claimed",
  "status": 400,
  "detail": "The space was already claimed. A claim can only succeed once.",
  "code": "space_already_claimed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
