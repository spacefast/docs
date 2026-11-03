---
title: "comments_reauth_required"
description: "Your access to this page changed since you signed in to comment."
---

Your access to this page changed since you signed in to comment.

**How to resolve:** Reload the page to sign in again, then retry.

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
  "type": "https://spacefast.com/docs/errors/comments_reauth_required",
  "title": "Comments reauth required",
  "status": 400,
  "detail": "Your access to this page changed since you signed in to comment.",
  "code": "comments_reauth_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
