---
title: "enforcement_policy_overlap"
description: "Two enforcement policy ranges overlap inside the same category."
---

Two enforcement policy ranges overlap inside the same category.

**How to resolve:** Adjust the overlapping ranges in `policies` so each score falls in one range.

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
  "type": "https://spacefast.com/docs/errors/enforcement_policy_overlap",
  "title": "Enforcement policy overlap",
  "status": 400,
  "detail": "Two enforcement policy ranges overlap inside the same category.",
  "code": "enforcement_policy_overlap",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
