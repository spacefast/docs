---
title: "space_delete_approval_spent"
description: "The person's approval to delete this Space was already used or its five minutes ran out."
---

The person's approval to delete this Space was already used or its five minutes ran out.

**How to resolve:** Call deleteSpace again. It asks the person to approve deleting this one Space again.

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
  "type": "https://spacefast.com/docs/errors/space_delete_approval_spent",
  "title": "Space delete approval spent",
  "status": 422,
  "detail": "The person's approval to delete this Space was already used or its five minutes ran out.",
  "code": "space_delete_approval_spent",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
