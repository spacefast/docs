---
title: "space_access_narrowing_blocked"
description: "A public rule this API can't change keeps part of the Space open, so nothing was closed."
---

A public rule this API can't change keeps part of the Space open, so nothing was closed.

**How to resolve:** Change each rule in `error.details.blockers` where its source says (usually sf.jsonc), then try again.

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
  "type": "https://spacefast.com/docs/errors/space_access_narrowing_blocked",
  "title": "Space access narrowing blocked",
  "status": 422,
  "detail": "A public rule this API can't change keeps part of the Space open, so nothing was closed.",
  "code": "space_access_narrowing_blocked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
