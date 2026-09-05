---
title: "space_unclaimed"
description: "The Space is anonymous, so it has no owner this operation can act for."
---

The Space is anonymous, so it has no owner this operation can act for.

**How to resolve:** Claim the Space into a team, then retry.

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
  "type": "https://spacefast.com/docs/errors/space_unclaimed",
  "title": "Space unclaimed",
  "status": 400,
  "detail": "The Space is anonymous, so it has no owner this operation can act for.",
  "code": "space_unclaimed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
