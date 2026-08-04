---
title: "publish_path_collision"
description: "Two different artifacts would serve the same URL after directory-index or clean-URL resolution."
---

Two different artifacts would serve the same URL after directory-index or clean-URL resolution.

**How to resolve:** Rename or remove one artifact so every request route has one owner.

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
  "type": "https://spacefast.com/docs/errors/publish_path_collision",
  "title": "Publish path collision",
  "status": 400,
  "detail": "Two different artifacts would serve the same URL after directory-index or clean-URL resolution.",
  "code": "publish_path_collision",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
