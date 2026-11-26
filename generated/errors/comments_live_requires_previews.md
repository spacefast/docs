---
title: "comments_live_requires_previews"
description: "Comments on the live Space need Comments on Previews too."
---

Comments on the live Space need Comments on Previews too.

**How to resolve:** Turn `comments.previews` on, or leave `comments.live` off.

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
  "type": "https://spacefast.com/docs/errors/comments_live_requires_previews",
  "title": "Comments live requires previews",
  "status": 422,
  "detail": "Comments on the live Space need Comments on Previews too.",
  "code": "comments_live_requires_previews",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
