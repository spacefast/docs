---
title: "principal_has_active_spaces"
description: "The principal still owns Spaces that are not deleted."
---

The principal still owns Spaces that are not deleted.

**How to resolve:** Delete the principal's Spaces, or retry with `force` to tombstone them.

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
  "type": "https://spacefast.com/docs/errors/principal_has_active_spaces",
  "title": "Principal has active spaces",
  "status": 400,
  "detail": "The principal still owns Spaces that are not deleted.",
  "code": "principal_has_active_spaces",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
