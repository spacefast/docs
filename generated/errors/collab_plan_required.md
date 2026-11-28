---
title: "collab_plan_required"
description: "Comments require a Go plan or higher."
---

Comments require a Go plan or higher.

**How to resolve:** Upgrade the Space's team to Go or higher in Billing settings to turn on Comments.

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
  "type": "https://spacefast.com/docs/errors/collab_plan_required",
  "title": "Collab plan required",
  "status": 422,
  "detail": "Comments require a Go plan or higher.",
  "code": "collab_plan_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
