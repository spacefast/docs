---
title: "version_live"
description: "The version is live and cannot be deleted."
---

The version is live and cannot be deleted.

**How to resolve:** Promote another version to live first.

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
  "type": "https://docs.spacefast.com/docs/errors/version_live",
  "title": "Version live",
  "status": 400,
  "detail": "The version is live and cannot be deleted.",
  "code": "version_live",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
