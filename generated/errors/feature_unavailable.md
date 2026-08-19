---
title: "feature_unavailable"
description: "This feature is not available on this deployment or plan."
---

This feature is not available on this deployment or plan.

**How to resolve:** Check the feature's availability. When the feature is enabled for your team, try again.

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
  "type": "https://spacefast.com/docs/errors/feature_unavailable",
  "title": "Feature unavailable",
  "status": 400,
  "detail": "This feature is not available on this deployment or plan.",
  "code": "feature_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
