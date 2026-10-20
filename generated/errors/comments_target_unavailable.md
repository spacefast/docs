---
title: "comments_target_unavailable"
description: "Comments only show on Versions while this Space's comments are set to Previews only, so a comment role can't point at the live site."
---

Comments only show on Versions while this Space's comments are set to Previews only, so a comment role can't point at the live site.

**How to resolve:** Point the Link or person at a Version (`--target version:<id>`), or set comments to Everywhere with sf comments settings set --surface everywhere.

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
  "type": "https://spacefast.com/docs/errors/comments_target_unavailable",
  "title": "Comments target unavailable",
  "status": 400,
  "detail": "Comments only show on Versions while this Space's comments are set to Previews only, so a comment role can't point at the live site.",
  "code": "comments_target_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
