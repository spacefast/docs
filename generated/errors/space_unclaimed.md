---
title: "space_unclaimed"
description: "This operation requires a claimed space."
---

This operation requires a claimed space.

**How to resolve:** Open the claim URL from your publish receipt, or run `sf spaces claim` in the directory you published from and sign in. This operation needs team ownership; the anonymous space key alone cannot grant it. Retry after claiming. See [Publish without an account](/docs/anonymous-and-claim/).

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
  "detail": "This operation requires a claimed space.",
  "code": "space_unclaimed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
