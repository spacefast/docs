---
title: "plan_code_exhausted"
description: "Every redemption of this plan code has been used."
---

Every redemption of this plan code has been used.

**How to resolve:** Ask whoever shared the link for a new one.

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
  "type": "https://spacefast.com/docs/errors/plan_code_exhausted",
  "title": "Plan code exhausted",
  "status": 400,
  "detail": "Every redemption of this plan code has been used.",
  "code": "plan_code_exhausted",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
