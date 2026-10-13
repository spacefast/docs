---
title: "browser_origin_not_allowed"
description: "This browser origin cannot perform authenticated mutations."
---

This browser origin cannot perform authenticated mutations.

**How to resolve:** Use the dashboard for this environment. Contact support if the dashboard still refuses the request.

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
  "type": "https://spacefast.com/docs/errors/browser_origin_not_allowed",
  "title": "Browser origin not allowed",
  "status": 400,
  "detail": "This browser origin cannot perform authenticated mutations.",
  "code": "browser_origin_not_allowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
