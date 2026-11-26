---
title: "tag_review_required"
description: "A Space under tag review can't take a one-call apply that also releases. For a team, this applies when any Space that inherits the team's tags requires review; that Space is in `details.spaceId`."
---

A Space under tag review can't take a one-call apply that also releases. For a team, this applies when any Space that inherits the team's tags requires review; that Space is in `details.spaceId`.

**How to resolve:** Apply without `releaseEnvironment`, submit the revision, and ask another owner or admin to approve and release it. Or turn off review in that Space's Tags settings.

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
  "type": "https://spacefast.com/docs/errors/tag_review_required",
  "title": "Tag review required",
  "status": 409,
  "detail": "A Space under tag review can't take a one-call apply that also releases. For a team, this applies when any Space that inherits the team's tags requires review; that Space is in `details.spaceId`.",
  "code": "tag_review_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
