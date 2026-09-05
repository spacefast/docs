---
title: "invalid_publish_payload"
description: "The publish request body is not shaped the way this publish mode requires."
---

The publish request body is not shaped the way this publish mode requires.

**How to resolve:** Send the multipart metadata part as a JSON object, and set `access` only when creating a team-owned Space.

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
  "type": "https://spacefast.com/docs/errors/invalid_publish_payload",
  "title": "Invalid publish payload",
  "status": 400,
  "detail": "The publish request body is not shaped the way this publish mode requires.",
  "code": "invalid_publish_payload",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
