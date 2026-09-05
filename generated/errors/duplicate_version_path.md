---
title: "duplicate_version_path"
description: "Two files in the publish resolve to the same version path."
---

Two files in the publish resolve to the same version path.

**How to resolve:** Rename or remove one of the colliding files, then publish again.

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
  "type": "https://spacefast.com/docs/errors/duplicate_version_path",
  "title": "Duplicate version path",
  "status": 400,
  "detail": "Two files in the publish resolve to the same version path.",
  "code": "duplicate_version_path",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
