---
title: "feature_unavailable"
description: "The feature this request needs is not enabled for the team."
---

The feature this request needs is not enabled for the team.

**How to resolve:** Read `feature` in the error details and ask a team admin to enable it, or use a plan that includes it.

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
  "detail": "The feature this request needs is not enabled for the team.",
  "code": "feature_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
