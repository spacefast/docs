---
title: "comment_room_deleted"
description: "The comment room for this page was deleted, so it can't take new comments."
---

The comment room for this page was deleted, so it can't take new comments.

**How to resolve:** Reload the page or list threads again to pick up the current room.

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
  "type": "https://spacefast.com/docs/errors/comment_room_deleted",
  "title": "Comment room deleted",
  "status": 400,
  "detail": "The comment room for this page was deleted, so it can't take new comments.",
  "code": "comment_room_deleted",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
