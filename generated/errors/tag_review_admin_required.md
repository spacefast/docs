---
title: "tag_review_admin_required"
description: "This Space requires review for tag changes, and only an owner or admin can approve, release or roll back its tags. A team's tags count when any Space that inherits them requires review; that Space is in `details.spaceId`."
---

This Space requires review for tag changes, and only an owner or admin can approve, release or roll back its tags. A team's tags count when any Space that inherits them requires review; that Space is in `details.spaceId`.

**How to resolve:** Ask a team owner or admin to approve and release the revision. Submitting it for review still works.

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
  "type": "https://spacefast.com/docs/errors/tag_review_admin_required",
  "title": "Tag review admin required",
  "status": 403,
  "detail": "This Space requires review for tag changes, and only an owner or admin can approve, release or roll back its tags. A team's tags count when any Space that inherits them requires review; that Space is in `details.spaceId`.",
  "code": "tag_review_admin_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
