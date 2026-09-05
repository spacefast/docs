---
title: "promotion_test_twin_missing"
description: "This live tenant has no linked test tenant to promote from."
---

This live tenant has no linked test tenant to promote from.

**How to resolve:** Link a test tenant to the live tenant, then promote.

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
  "type": "https://spacefast.com/docs/errors/promotion_test_twin_missing",
  "title": "Promotion test twin missing",
  "status": 400,
  "detail": "This live tenant has no linked test tenant to promote from.",
  "code": "promotion_test_twin_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
