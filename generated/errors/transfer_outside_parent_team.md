---
title: "transfer_outside_parent_team"
description: "The parent team restricts outgoing Space transfers to itself and its subteams."
---

The parent team restricts outgoing Space transfers to itself and its subteams.

**How to resolve:** Choose the parent or one of its subteams, or ask a parent admin to change the policy.

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
  "type": "https://spacefast.com/docs/errors/transfer_outside_parent_team",
  "title": "Transfer outside parent team",
  "status": 400,
  "detail": "The parent team restricts outgoing Space transfers to itself and its subteams.",
  "code": "transfer_outside_parent_team",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
