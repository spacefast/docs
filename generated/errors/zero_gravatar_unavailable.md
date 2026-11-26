---
title: "zero_gravatar_unavailable"
description: "Gravatar profiles aren't available to this app when it runs locally."
---

Gravatar profiles aren't available to this app when it runs locally.

**How to resolve:** Publish the app to read Gravatar profiles through the hosted service. Plain avatar image URLs work locally. See https://spacefast.com/docs/zero.

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
  "type": "https://spacefast.com/docs/errors/zero_gravatar_unavailable",
  "title": "Zero gravatar unavailable",
  "status": 422,
  "detail": "Gravatar profiles aren't available to this app when it runs locally.",
  "code": "zero_gravatar_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
