---
title: "space_no_live_version"
description: "The space has no live version, so this operation has nothing to act on."
---

The space has no live version, so this operation has nothing to act on.

**How to resolve:** Publish a version to the space, then retry.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/space_no_live_version",
  "title": "Space no live version",
  "status": 400,
  "detail": "The space has no live version, so this operation has nothing to act on.",
  "code": "space_no_live_version",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
