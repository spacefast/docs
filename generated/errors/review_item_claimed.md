---
title: "review_item_claimed"
description: "Another reviewer already claimed this review item."
---

Another reviewer already claimed this review item.

**How to resolve:** Pick an unclaimed item from the review queue.

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
  "type": "https://spacefast.com/docs/errors/review_item_claimed",
  "title": "Review item claimed",
  "status": 400,
  "detail": "Another reviewer already claimed this review item.",
  "code": "review_item_claimed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
