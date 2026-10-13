---
title: "runtime_jti_replayed"
description: "The runtime token was already used. Replays are rejected."
---

The runtime token was already used. Replays are rejected.

**How to resolve:** Mint a fresh runtime token for each request.

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
  "type": "https://spacefast.com/docs/errors/runtime_jti_replayed",
  "title": "Runtime jti replayed",
  "status": 400,
  "detail": "The runtime token was already used. Replays are rejected.",
  "code": "runtime_jti_replayed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
