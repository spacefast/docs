---
title: "policy_exceeds_grantor"
description: "The requested API key policy grants more than the calling credential holds."
---

The requested API key policy grants more than the calling credential holds.

**How to resolve:** Request a policy that is a subset of the caller's own permissions.

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
  "type": "https://spacefast.com/docs/errors/policy_exceeds_grantor",
  "title": "Policy exceeds grantor",
  "status": 400,
  "detail": "The requested API key policy grants more than the calling credential holds.",
  "code": "policy_exceeds_grantor",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
