---
title: "version_not_promotable"
description: "The version cannot be promoted in its current status."
---

The version cannot be promoted in its current status.

**How to resolve:** Only ready versions can be promoted to a channel.

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
  "type": "https://docs.spacefast.com/docs/errors/version_not_promotable",
  "title": "Version not promotable",
  "status": 400,
  "detail": "The version cannot be promoted in its current status.",
  "code": "version_not_promotable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
