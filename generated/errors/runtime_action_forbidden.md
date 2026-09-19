---
title: "runtime_action_forbidden"
description: "The runtime credential does not allow this action."
---

The runtime credential does not allow this action.

**How to resolve:** Use a runtime token scoped for this action.

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
  "type": "https://spacefast.com/docs/errors/runtime_action_forbidden",
  "title": "Runtime action forbidden",
  "status": 400,
  "detail": "The runtime credential does not allow this action.",
  "code": "runtime_action_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
