---
title: "policy_exceeds_grantor"
description: "The requested key policy grants more than your own credential allows."
---

The requested key policy grants more than your own credential allows.

**How to resolve:** Request a policy that is a subset of the credential creating the key.

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
  "type": "https://spacefast.com/docs/errors/policy_exceeds_grantor",
  "title": "Policy exceeds grantor",
  "status": 400,
  "detail": "The requested key policy grants more than your own credential allows.",
  "code": "policy_exceeds_grantor",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
