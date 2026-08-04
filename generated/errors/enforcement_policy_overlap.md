---
title: "enforcement_policy_overlap"
description: "Enforcement policy severity ranges overlap within a category."
---

Enforcement policy severity ranges overlap within a category.

**How to resolve:** Adjust the category ranges so each severity is covered by at most one policy.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/enforcement_policy_overlap",
  "title": "Enforcement policy overlap",
  "status": 400,
  "detail": "Enforcement policy severity ranges overlap within a category.",
  "code": "enforcement_policy_overlap",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
