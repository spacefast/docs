---
title: "runtime_scope_forbidden"
description: "The runtime token's scope does not cover this path or action."
---

The runtime token's scope does not cover this path or action.

**How to resolve:** Use the token minted for this exact session, space, and step.

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
  "type": "https://spacefast.com/docs/errors/runtime_scope_forbidden",
  "title": "Runtime scope forbidden",
  "status": 400,
  "detail": "The runtime token's scope does not cover this path or action.",
  "code": "runtime_scope_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
