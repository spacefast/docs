---
title: "share_link_policy_enforced_by_parent"
description: "The parent team blocks share links for every subteam, so a subteam can't turn the block off."
---

The parent team blocks share links for every subteam, so a subteam can't turn the block off.

**How to resolve:** Ask an owner or admin of the parent team to turn off Block share links there.

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
  "type": "https://spacefast.com/docs/errors/share_link_policy_enforced_by_parent",
  "title": "Share link policy enforced by parent",
  "status": 422,
  "detail": "The parent team blocks share links for every subteam, so a subteam can't turn the block off.",
  "code": "share_link_policy_enforced_by_parent",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
