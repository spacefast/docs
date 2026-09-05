---
title: "plan_unknown"
description: "The tenant's plan catalog has no plan by that name."
---

The tenant's plan catalog has no plan by that name.

**How to resolve:** Send a plan code the tenant's catalog lists.

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
  "type": "https://spacefast.com/docs/errors/plan_unknown",
  "title": "Plan unknown",
  "status": 400,
  "detail": "The tenant's plan catalog has no plan by that name.",
  "code": "plan_unknown",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
