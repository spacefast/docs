---
title: "not_enrolled"
description: "The account is not enrolled in the Spacefast private beta."
---

The account is not enrolled in the Spacefast private beta.

**How to resolve:** Request beta access, then retry once the account is enrolled.

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
  "type": "https://spacefast.com/docs/errors/not_enrolled",
  "title": "Not enrolled",
  "status": 400,
  "detail": "The account is not enrolled in the Spacefast private beta.",
  "code": "not_enrolled",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
