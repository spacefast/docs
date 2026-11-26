---
title: "tag_review_self_approval"
description: "This Space requires review for tag changes, and the person who submitted a tag revision cannot also be the second person: approve it, or release, roll back or inherit a revision they approved themselves, which includes one approved before review was turned on. A Space under review also can't move into a team whose released tags its submitter approved. A team's tags count when any Space that inherits them requires review; that Space is in `details.spaceId`."
---

This Space requires review for tag changes, and the person who submitted a tag revision cannot also be the second person: approve it, or release, roll back or inherit a revision they approved themselves, which includes one approved before review was turned on. A Space under review also can't move into a team whose released tags its submitter approved. A team's tags count when any Space that inherits them requires review; that Space is in `details.spaceId`.

**How to resolve:** Ask another owner or admin to approve or release the revision. Before moving a Space, turn its team tag inheritance off. On a team with one admin, that admin can turn off review in the Space's Tags settings instead.

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
  "type": "https://spacefast.com/docs/errors/tag_review_self_approval",
  "title": "Tag review self approval",
  "status": 403,
  "detail": "This Space requires review for tag changes, and the person who submitted a tag revision cannot also be the second person: approve it, or release, roll back or inherit a revision they approved themselves, which includes one approved before review was turned on. A Space under review also can't move into a team whose released tags its submitter approved. A team's tags count when any Space that inherits them requires review; that Space is in `details.spaceId`.",
  "code": "tag_review_self_approval",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
